import {useEffect, useState} from 'react';


const useTheme = () => {
    const LOCAL_STORAGE_THEME:string = "weatherThemeMode";
    const [themeMode, setThemeMode] = useState(initializeTheme);
    

    const darkTheme =()=>{
        setThemeMode("dark");
    }

    const defaultTheme =()=>{
        setThemeMode("default");
    }

    function initializeTheme(){
        const themeInLocalStorage: string | null= localStorage.getItem(LOCAL_STORAGE_THEME);
        if(themeInLocalStorage){
            return themeInLocalStorage
        }else{
            return "default";
        }
    }

    useEffect(()=>{
        const bodyComponent: HTMLBodyElement | null= document.querySelector("body");
        if( bodyComponent?.className){
            bodyComponent.className =  themeMode;
            localStorage.setItem(LOCAL_STORAGE_THEME, themeMode); 
        }
    },[themeMode]);   

    return {themeMode, darkTheme, defaultTheme};
};

export default useTheme;
