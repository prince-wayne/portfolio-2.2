export default async function loadDataFile(path) {
  // If I used random number I could easily have log infomation every 1/10 runs.
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading data: ", error);
    return []; // an empty array isn't acceptable in this moment. but it's how we'll use it as a check
  }
  // function from older project, nearly no changes.
}

/* 

============= USAGE EXAMPLE =============

    import React, { useEffect, useState } from "react";
    import loadDataFile from "../Supporting Files/loadfile";
    
    export default function MyComponent() {
      const [items, setItems] = useState(null);
      useEffect(() => {
        let mounted = true;
        (async () => {
          const data = await loadDataFile("/data/myfile.json"); // relative to public/ if using CRA
          if (mounted) setItems(data);
        })();
        return () => { mounted = false; };
      }, []);
    
      if (items === null) return <div>Loading…</div>;
      if (Array.isArray(items) && items.length === 0) return <div>No data</div>;
    
      return (
        <ul>
          {items.map((it, i) => <li key={i}>{JSON.stringify(it)}</li>)}
        </ul>
      );
    }

*/