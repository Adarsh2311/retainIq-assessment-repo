'use client'

import React, { useState } from 'react';
import styles from './modal.module.css';

const designs = ['https://img.freepik.com/free-psd/flat-design-fashion-template_23-2149936485.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/fashion-landing-page-design-template_23-2149072733.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/flat-design-fashion-business-template_23-2149714569.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/gradient-fashion-design-template_23-2149690079.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/flat-design-fashion-template_23-2149936503.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/flat-design-fashion-template_23-2150055181.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/flat-design-fashion-template_23-2149936485.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/fashion-landing-page-design-template_23-2149072733.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/flat-design-fashion-business-template_23-2149714569.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/gradient-fashion-design-template_23-2149690079.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/flat-design-fashion-template_23-2149936503.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
    'https://img.freepik.com/free-psd/flat-design-fashion-template_23-2150055181.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid']

const Modal = ({ handleNewDesign, handleModalClose }) => {
    const handleClickInside = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.modal_wrapper} onClick={handleClickInside}>

            <div className={styles.close_btn_wrapper} onClick={handleModalClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div className={styles.img_wrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>

            <div className={styles.modal_header}>

                <div>Select a design to link</div>

                <div className={styles.search_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <div>Search</div>
                </div>

            </div>

            <div className={styles.divider} />

            <div className={styles.designs_wrapper}>
                {designs.map((design) => (
                    <div className={styles.designs}>
                        <img src={design}
                            width={'100px'}
                            height='100px' />
                        <div className={styles.insert_design} onClick={() => handleNewDesign(design)}>Insert</div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Modal;