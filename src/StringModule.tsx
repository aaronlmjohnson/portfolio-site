const StringModule = (()=>{
    const titleCase:any = (sentence: string)=>{
        const stringArr = sentence.split(' ');
        return stringArr.map((str: string)=> str[0].toUpperCase() + str.slice(1)).join(' ');
    }

    return {
        titleCase
    }
})();

export default StringModule;
