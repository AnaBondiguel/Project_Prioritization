import React, { useState } from "react";

const Header = () => {
    let initialData = {
        projects: [],
        userInput: "",
      };
    
      const [data, setData] = useState(initialData);

      function handleOnChange(event) {
        setData({
          ...data,
          userInput: event.target.value,
        });
      }

    return (
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGO1uzGzmVB-A/company-logo_200_200/0/1656630677571?e=1674691200&v=beta&t=tluNdfouY9QZ-2Yq10r9V1_Lk9KteBfrkcttzlngA0A" width="60" height="60" alt="logo"/>
            <label>Search: </label><input type="text" onChange={handleOnChange}></input>
   
        </header>
    )
}

export default Header;