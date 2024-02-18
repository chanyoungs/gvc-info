import Papa from "papaparse";

export const fetchData = async (setCategories) => {
    const csvs = {};
    const decoder = new TextDecoder("utf-8");

    const csvsArray = await Promise.all(
        [
            [
                "data",
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7giEwAym5W8D-FX9I13fJo3xDS7QkGWAzi1c9WT8hkPx1R5qbr-3PicaW7kxegFywMytm1NOmqBdZ/pub?gid=1740377975&single=true&output=csv",
            ],
            [
                "categoryNames",
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7giEwAym5W8D-FX9I13fJo3xDS7QkGWAzi1c9WT8hkPx1R5qbr-3PicaW7kxegFywMytm1NOmqBdZ/pub?gid=352505193&single=true&output=csv",
            ],
        ].map(async ([key, url], index) => {
            const response = await fetch(url);
            const csvEncoded = await response.body.getReader().read();
            const csvDecoded = decoder.decode(csvEncoded.value); // the csv text
            const rows = Papa.parse(csvDecoded, { header: true }).data; // array of objects
            return { key, data: rows };
        })
    );

    csvsArray.forEach(({ key, data }) => {
        csvs[key] = data;
    });

    const categoryNames = {};
    csvs["categoryNames"].forEach((item, index) => {
        categoryNames[item["category_key"]] = {
            categoryKor: item["category-kor"],
            categoryEng: item["category-eng"],
        };
    });

    const data = {};
    csvs["data"].forEach((item, index) => {
        const { category_key, ...content } = item;

        if (!data[category_key])
            data[category_key] = {
                kor: {
                    name: categoryNames[category_key]["categoryKor"],
                    contents: [],
                },
                eng: {
                    name: categoryNames[category_key]["categoryEng"],
                    contents: [],
                },
            };

        const contents = { kor: {}, eng: {} };
        Object.keys(content).forEach((key) => {
            const [keyName, language] = key.split("-");
            contents[language][keyName] = content[key];
        });
        ["kor", "eng"].forEach((l) => {
            data[category_key][l]["contents"].push(contents[l]);
        });
    });
    setCategories(data);
};
