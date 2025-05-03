import React, {useState, useEffect} from 'react'

export default function Languages(prop) {
    const [langs, setLangs] = useState([]);

    useEffect(() => {
        fetchLangs();
    }, []);

    const fetchLangs = async () => {
        try {
            const response = await fetch(`https://api.github.com/repos/stharanzn/${prop["prop"]["repoName"]}/languages`, {});
            if (response.ok) {
                const data = await response.json();
                const objData = Object.keys(data);


                setLangs(objData);

            } else {
                console.error('Failed to fetch project data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>

            {langs.map((item, index) => {
                return (
                    <span key={index} className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">{item}</span>
                )
            })}
        </>
    );
}
