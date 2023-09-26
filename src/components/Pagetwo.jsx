import './Pagetwo.css'
import PagetwoImage from './PagetwoImage.jpg'
import React from 'react'

const Pagetwo = () => {
    return (
        <div className='PageTwoContent'>
            <div className='PageTwoContentDiv1'>
                <div className='PageTwoContentDiv1Title'>המשימה שלנו</div>
                <div className='PageTwoContentDiv1Text'>המאבק בעוני, הדרה, התחממות כדור הארץ, הגנה על המגוון הביולוגי, מניעת מחלות, הגנה על זכויות גברים ונשים וכו' הם נושאים שמעסיקים את כולנו. ועדיין, קשה לגרום לאזרחים לדבוק בנושאים הללו. עם זאת, על ידי הפיכת הנושאים הללו לפופולריות והנגשתם לכמה שיותר אנשים, המנטליות תתפתחנה, ותאפשר בניית עולם הוגן יותר, מאוחד יותר, שוויוני יותר ובר קיימא.
                </div>
                <div className='PageTwoContentDiv1Text'>כדי להשתתף במאמץ זה, עמותת ACT Responsible מזהה, מפגישה ומפיצה את מסעות הפרסום הטובים ביותר לתקשורת מטרות מרכזיות שנוצרו בכל שנה ברחבי העולם. פרסום פשוט מבטא סוגיות מורכבות. עמותות זקוקות לכוח הזה כדי להתפרסם, להעלות מודעות, להפיק תרומות, להפגין את מעשיהן...

                </div>
            </div>
            <div className='PageTwoContentDiv2'>
                <div className='PageTwoContentDiv2Content'>
                    <div className='PageTwoContentDiv2ContentTitle'>+ 25,000 קמפיינים
                    </div>
                    <div className='PageTwoContentDiv2ContentText'>גלה את הפרסומות המעורבות הטובות ביותר שניתן לחפש לפי נושא במסד הנתונים שלנו.
                    </div>
                    <div className='PageTwoContentDiv2ContentUl'>
                        <ul>
                            <li>התחממות כדור הארץ</li>
                            <li>מגוון ביולוגי</li>
                            <li>זכויות אדם</li>
                            <li>אי הכללה</li>
                            <li>מניעה</li>
                            <li>בריאות</li>
                        </ul>
                    </div>
                    <div className='PageTwoContentDiv2ContentButton'>
                        <button className='PageTwoContentDiv2ContentButtonButton'>גישה לבסיס נתונים</button>
                    </div>
                </div>
                <div className='PageTwoContentDiv2Image'>
                    <img src={PagetwoImage} alt='image1'></img>
                </div>
            </div>
        </div>
    )
}

export default Pagetwo
