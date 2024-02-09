import Papa from 'papaparse';

export const fetchData = async (setCategories) => {
    const response = await fetch(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vR7giEwAym5W8D-FX9I13fJo3xDS7QkGWAzi1c9WT8hkPx1R5qbr-3PicaW7kxegFywMytm1NOmqBdZ/pub?gid=1740377975&single=true&output=csv'
    );
    const reader = response.body.getReader();
    const result = await reader.read(); // raw array
    const decoder = new TextDecoder("utf-8");
    const csv = decoder.decode(result.value); // the csv text
    const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
    const rows = results.data; // array of objects

    const data = {};

    rows.forEach((item, index) => {
        const { category_key, "category-kor": categoryKor, "category-eng": categoryEng, ...content } = item;
        if (!data[category_key])
            data[category_key] = { kor: { name: categoryKor, contents: [] }, eng: { name: categoryEng, contents: [] } }

        const contents = { kor: {}, eng: {} }
        Object.keys(content).forEach((key) => {

            const [keyName, language] = key.split("-");
            contents[language][keyName] = content[key]
        });
        ["kor", "eng"].forEach(l => {
            data[category_key][l]["contents"].push(contents[l])
        })
    });
    setCategories(data)
};