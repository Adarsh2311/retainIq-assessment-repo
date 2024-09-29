'use client'

import React, { useState } from 'react';
import styles from './main.module.css'
import Table from '../tableComponent/table';

const MainComponent = () => {



    return (
        <div className={styles.page_wrapper}>

            <div className={styles.side_bar}>

                <div className={styles.top_content}>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 800 800"
                        width={5}
                        height={5}
                        style={{
                            width: "80%",
                            height: "80%",
                            contentVisibility: "visible",
                        }}
                    >
                        <defs>
                            <clipPath id="a">
                                <path d="M0 0h800v800H0z" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#a)">
                            <image
                                width={722}
                                height={722}
                                preserveAspectRatio="xMidYMid slice"
                                xlinkHref="data:;base64,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"
                                className="png"
                                style={{
                                    display: "block",
                                }}
                            />
                        </g>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#808080" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>

                    <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="60px" height="60px"><path d="M47.3,21.01c-0.58-1.6-1.3-3.16-2.24-4.66c-0.93-1.49-2.11-2.93-3.63-4.13c-1.51-1.19-3.49-2.09-5.59-2.26l-0.78-0.04	c-0.27,0.01-0.57,0.01-0.85,0.04c-0.57,0.06-1.11,0.19-1.62,0.34c-1.03,0.32-1.93,0.8-2.72,1.32c-1.42,0.94-2.55,2.03-3.57,3.15	c0.01,0.02,0.03,0.03,0.04,0.05l0.22,0.28c0.51,0.67,1.62,2.21,2.61,3.87c1.23-1.2,2.83-2.65,3.49-3.07	c0.5-0.31,0.99-0.55,1.43-0.68c0.23-0.06,0.44-0.11,0.64-0.12c0.1-0.02,0.19-0.01,0.3-0.02l0.38,0.02c0.98,0.09,1.94,0.49,2.85,1.19	c1.81,1.44,3.24,3.89,4.17,6.48c0.95,2.6,1.49,5.44,1.52,8.18c0,1.31-0.17,2.57-0.57,3.61c-0.39,1.05-1.38,1.45-2.5,1.45	c-1.63,0-2.81-0.7-3.76-1.68c-1.04-1.09-2.02-2.31-2.96-3.61c-0.78-1.09-1.54-2.22-2.26-3.37c-1.27-2.06-2.97-4.67-4.15-6.85	L25,16.35c-0.31-0.39-0.61-0.78-0.94-1.17c-1.11-1.26-2.34-2.5-3.93-3.56c-0.79-0.52-1.69-1-2.72-1.32	c-0.51-0.15-1.05-0.28-1.62-0.34c-0.18-0.02-0.36-0.03-0.54-0.03c-0.11,0-0.21-0.01-0.31-0.01l-0.78,0.04	c-2.1,0.17-4.08,1.07-5.59,2.26c-1.52,1.2-2.7,2.64-3.63,4.13C4,17.85,3.28,19.41,2.7,21.01c-1.13,3.2-1.74,6.51-1.75,9.93	c0.01,1.78,0.24,3.63,0.96,5.47c0.7,1.8,2.02,3.71,4.12,4.77c1.03,0.53,2.2,0.81,3.32,0.81c1.23,0.03,2.4-0.32,3.33-0.77	c1.87-0.93,3.16-2.16,4.33-3.4c2.31-2.51,4.02-5.23,5.6-8c0.44-0.76,0.86-1.54,1.27-2.33c-0.21-0.41-0.42-0.84-0.64-1.29	c-0.62-1.03-1.39-2.25-1.95-3.1c-0.83,1.5-1.69,2.96-2.58,4.41c-1.59,2.52-3.3,4.97-5.21,6.98c-0.95,0.98-2,1.84-2.92,2.25	c-0.47,0.2-0.83,0.27-1.14,0.25c-0.43,0-0.79-0.1-1.13-0.28c-0.67-0.35-1.3-1.1-1.69-2.15c-0.4-1.04-0.57-2.3-0.57-3.61	c0.03-2.74,0.57-5.58,1.52-8.18c0.93-2.59,2.36-5.04,4.17-6.48c0.91-0.7,1.87-1.1,2.85-1.19l0.38-0.02c0.11,0.01,0.2,0,0.3,0.02	c0.2,0.01,0.41,0.06,0.64,0.12c0.26,0.08,0.54,0.19,0.83,0.34c0.2,0.1,0.4,0.21,0.6,0.34c1,0.64,1.99,1.58,2.92,2.62	c0.72,0.81,1.41,1.71,2.1,2.63L25,25.24c0.75,1.55,1.53,3.09,2.39,4.58c1.58,2.77,3.29,5.49,5.6,8c0.68,0.73,1.41,1.45,2.27,2.1	c0.61,0.48,1.28,0.91,2.06,1.3c0.93,0.45,2.1,0.8,3.33,0.77c1.12,0,2.29-0.28,3.32-0.81c2.1-1.06,3.42-2.97,4.12-4.77	c0.72-1.84,0.95-3.69,0.96-5.47C49.04,27.52,48.43,24.21,47.3,21.01z" /></svg>

                    {/* <svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 60.674 60.674" xml:space="preserve">
                        <g>
                            <g>
                                <path style="fill:#010002;" d="M46.682,6.95c-0.675-0.675-1.813-1.147-2.768-1.147h-5.818c-0.134,0-1.318,0.04-1.516,1.438
			c-0.02,0.14-0.05,0.351-0.121,0.56c-0.473,1.384-2.979,2.815-6.353,2.815s-5.88-1.432-6.353-2.815
			c-0.408-1.194-1.446-1.997-2.584-1.997h-5.397c-0.627,0-0.627,0-6.953,6.322l-8.086,8.082C0.261,20.68,0.001,21.308,0,21.975
			c0,0.669,0.259,1.297,0.732,1.77l7.714,7.716c0.944,0.945,2.59,0.945,3.536,0l2.289-2.29v23.2c0,1.379,1.122,2.5,2.5,2.5h26.854
			c1.378,0,2.5-1.121,2.5-2.5V28.892l2.568,2.568c0.944,0.945,2.591,0.945,3.535,0l7.714-7.716c0.472-0.472,0.732-1.1,0.732-1.768
			s-0.26-1.296-0.732-1.767L46.682,6.95z M10.214,28.985l-7.007-7.008c0.571-0.571,1.199-1.199,1.857-1.857l7.103,6.912
			L10.214,28.985z M44.924,24.252c-0.894,0-1.799,0.692-1.799,2.018v25.601H17.271V26.548c0-1.325-0.905-2.017-1.799-2.017
			c-0.367,0-0.919,0.115-1.469,0.664l-1.128,1.129l-7.103-6.911C9.87,15.316,14.91,10.28,16.39,8.805h4.536
			c0.993,2.835,4.76,4.813,9.18,4.813s8.188-1.978,9.18-4.813h4.628c0.162,0.002,0.531,0.155,0.647,0.268l10.473,10.472
			l-7.103,6.911l-1.538-1.54C45.844,24.367,45.291,24.252,44.924,24.252z M50.46,28.985l-1.823-1.823l7.104-6.912l1.727,1.727
			L50.46,28.985z"/>
                            </g>
                        </g>
                    </svg> */}

                </div>

                <div className={styles.bottom_content}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>


                </div>
            </div>

            <div className={styles.main_container_wrapper}>

                <div className={styles.header_wrapper}>
                    <div className={styles.left_content}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>

                        <div className={styles.header_text_wrapper}>

                            <div className={styles.header_text}>
                                Test 3_staging
                            </div>

                            <div className={styles.header_text_underline} />

                        </div>

                        <div className={styles.radiant_wrapper}>Primary Feed
                        </div>
                    </div>

                    <button className={styles.publish_btn}>Publish Feed</button>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.table_wrapper}>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default MainComponent;