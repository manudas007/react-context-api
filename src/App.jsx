import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import ThemeSwitcher from './components/ThemeSwitcher'
import { ThemeProvider } from './context/theme/Theme'
import UserContextProvider from './context/user/userContextProvider'

function App() {
  const [themeMode,setThemeMode] = useState("light");
  const darkTheme = () =>{
    setThemeMode("dark");
  };
  const lightTheme = () =>{
    setThemeMode("light");
  };

  useEffect(()=>{
    const html = document.querySelector('html');
    html.classList.remove('dark','light');
    html.classList.add(themeMode);
  },[themeMode])
  
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <UserContextProvider>
        <ThemeSwitcher />
        <Login />
        <Profile />
      </UserContextProvider>
    </ThemeProvider>
  )
}

export default App
