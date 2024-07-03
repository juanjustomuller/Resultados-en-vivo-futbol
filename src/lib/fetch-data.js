export const fetchFixture = async () => {
    const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "29ee605c28msh223935d9b9a0eadp11fca9jsn72d80aaabcde",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
      //console.log("Response status:", response.status);
      //console.log("Response headers:", response.headers);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json(); // Parse response as JSON
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      return { error: error.message }; // Return an error object
    }
  };
