export const mapKeyToData = (dataArr: any[], prefix: string) =>
    dataArr.map((item, index) => ({ ...item, key: prefix + '-' + index }));
