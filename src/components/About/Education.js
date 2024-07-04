import React from "react";
import { Chrono } from "react-chrono";

const Education = () => {
    const items = [
        {
            title: '2024',
            cardTitle: "Bachelor of Engineering in Information Technology ( CGPA of 8.2 )",
            cardSubtitle: '2020-2024',
            cardDetailedText: "Vidyavardhini’s College of Engineering and Technology, (Vasai) Mumbai."
        },
        {
            title: '2020',
            cardTitle: 'Higher Seconday Certificate     - 74%',
            cardSubtitle: '2018-2020',
            cardDetailedText: 'Ragni Pramod Juniar College of Arts, Commerce & Science, (Vasai) Mumbai.'
        },
        {
            title: '2018',
            cardTitle: 'Secondary School Certificate     - 82%',
            cardSubtitle: '2018',
            cardDetailedText: 'The Saraswati Vidyalaya, (Bhayander) Mumbai.'
        },
    ];

    return (

        <Chrono
            items={items}
            mode="VERTICAL"
            // cardHeight={100}
            theme={{
                cardBgColor: 'transparent',
                cardForeColor: '#fff', // card title color
                subtitleColor: '#fff', // card subtitle color
                textColor: '#fff',
                titleColor:"#fff",
                hideControls:true, // card detailed text color
            }}
        />
    );
}

export default Education;
