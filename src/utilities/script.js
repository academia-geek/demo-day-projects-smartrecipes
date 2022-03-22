import React from 'react'

const Script = () => {

    async function sendApiRequest () {
        let API_ID = "137fbedf";
        let API_KEY = "2582fab9adb322cf2ccfcecfdb962c4e";
        let response = await fetch(`https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=pasta`);
        console.log(response)
        let data = 
    }



  return (
    <div>

    </div>
  )
}

export default Script