import "./Pagefour.css"
import Page5Image from "./Page5Image.png"
import React from 'react'

const Pagefour = () => {
    return (
        <div className="PagefourContent">
            <div className="PageFourDiv1">
                <img src={Page5Image} alt='image3'></img>
            </div>

            <div className="PageFourDiv2">
                <h1>הכלי שלנו</h1>
                <p>פרסום הוא כלי רב עוצמה. היא משרתת מטרות של עניין כללי, היא מיידעת אותנו, מעלה את המודעות שלנו, מתריעה, מגייסת אותנו, משפיעה עלינו ומעודדת אותנו לשנות את התנהגותנו. היא מאפשרת לעמותות, קרנות ומוסדות לפרסם את פועלם, להפגין את מעשיהם ולחזק את קשריהם עם האזרחים. כאשר משרתים עסקים, יש להשתמש בו בצורה אחראית.</p>
                <p>הרצון שלנו הוא להציג את אוספי הפרסומות החברתיות והסביבתיות הללו ככלי שאין עוררין על העלאת המודעות לאתגרים החברתיים והסביבתיים העיקריים של זמננו.</p>
            </div>
        </div>
    )
}

export default Pagefour
