'use client'

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// import { DndContext, MeasuringStrategy, closestCenter } from '@dnd-kit/core';
// import {
//     restrictToFirstScrollableAncestor,
//     restrictToVerticalAxis,
//     restrictToWindowEdges,
// } from '@dnd-kit/modifiers';
// import {
//     AnimateLayoutChanges,
//     SortableContext,
//     arrayMove,
//     defaultAnimateLayoutChanges,
//     useSortable,
//     verticalListSortingStrategy,
// } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';

import DraggableRow from './draggableRow';
import styles from './ScrollableTable.module.css';
import Modal from '../modalComponent/modal';

export default function Table() {
    const [variants, setVariants] = useState(["Primary Variant", "Variant 2"]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [rows, setRows] = useState([
        {
            id: 1,
            idx: 1,
            productCollection: 'Product Collection',
            filter: 'contains',
            productName: 'Anarkali Kurtas',
            variants: [
                {
                    id: 1,
                    img: 'https://img.freepik.com/free-psd/fashion-landing-page-design-template_23-2149072733.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
                    imgTitle: 'Fashion Sale',
                },
                {
                    id: 2,
                    img: 'https://img.freepik.com/free-psd/flat-design-fashion-template_23-2149936485.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
                    imgTitle: 'Fashion Sale',
                },

            ],
        },
        {
            id: 2,
            idx: 2,
            productCollection: 'Product Collection',
            filter: 'contains',
            productName: 'Anarkali Kurtas',
            variants: [
                {
                    id: 21,
                    img: 'https://img.freepik.com/free-psd/flat-design-fashion-template_23-2149936485.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
                    imgTitle: 'Fashion Sale',
                },
                {
                    id: 22,
                    img: 'https://img.freepik.com/free-psd/fashion-landing-page-design-template_23-2149072733.jpg?ga=GA1.1.1608064543.1727532405&semt=ais_hybrid',
                    imgTitle: 'Fashion Sale',
                },

            ],
        },
    ]);

    const addVariant = () => {
        const newVariant = `Variant ${variants.length + 1}`;
        setVariants([...variants, newVariant]);
        setRows(rows.map(row => ({ ...row, variants: [...row.variants, {}] })));
    };

    const addState = () => {
        // Determine the new id and idx values by incrementing the last row's id and idx
        const newId = rows.length > 0 ? rows.length + 1 : 1;

        const newRow = {
            id: newId,
            idx: newId,
            productCollection: 'Product Collection',
            filter: 'contains',
            productName: 'Anarkali Kurtas',
            variants: variants.map(() => ({
                id: newId * newId,
                img: '',
                imgTitle: '',
            })),
        };

        // Add the new row to the rows array
        setRows([...rows, newRow]);
    };

    const deleteState = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);

        const reIndexedRows = updatedRows.map((row, index) => ({
            ...row,
            idx: index + 1,
        }));

        setRows(reIndexedRows);
    };


    const moveRow = (fromIndex, toIndex) => {
        const updatedRows = [...rows];
        const [movedRow] = updatedRows.splice(fromIndex, 1);
        updatedRows.splice(toIndex, 0, movedRow);
        setRows(updatedRows);
    };

    const handleNewDesign = (newDesign) => {
        setRows((prevRows) =>
            prevRows.map((row) =>
                row.id === selectedRowId
                    ? {
                        ...row,
                        variants: row.variants.map((variant) =>
                            variant.id === selectedVariant
                                ? { ...variant, img: newDesign }
                                : variant
                        )
                    }
                    : row
            )
        );
        handleModalClose();
        console.log(rows, 'design')
    };


    const openModalForRow = (rowId, variantId) => {
        setSelectedRowId(rowId)
        setSelectedVariant(variantId);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.container}>

                <div className={styles.tableWrapper}>
                    {/* Fixed Product Filter Column */}
                    <table className={styles.fixedTable}>

                        <thead>
                            <tr>
                                <th className={styles.th} />
                                <th className={`${styles.th} ${styles.variant_head_text}`}>Product Filter</th>
                            </tr>

                        </thead>

                        <tbody className={styles.fixed_table_body}>

                            {rows.map((row, index) => (
                                <DraggableRow key={row.id} id={row.id} index={index} moveRow={moveRow}>
                                    <td className={styles.idx_column_data}>

                                        <div className={styles.idx_column_data_wrapper}>
                                            <div className={styles.delete_state} onClick={() => deleteState(row.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                            </div>
                                            <div className={styles.idx_column_data_main}>
                                                <div className={styles.row_idx}>
                                                    {row.idx}
                                                </div>
                                                <svg fill="#000000" width="20" height="20" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M76,60A16,16,0,1,1,60,44,16.01833,16.01833,0,0,1,76,60Zm52-16a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,44Zm68,32a16,16,0,1,0-16-16A16.01833,16.01833,0,0,0,196,76ZM60,180a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,60,180Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,180Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,196,180ZM60,112a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,60,112Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,112Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,196,112Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles.product_filter_data}>
                                        <div className={styles.card_filter}>
                                            <div className={styles.badge}>{row.productCollection}</div>
                                            <div className={`${styles.badge} ${styles.filter_badge}`}>{row.filter}</div>
                                            <div className={styles.badge}>{row.productName}</div>

                                        </div>
                                    </td>

                                </DraggableRow>
                            ))}

                        </tbody>
                    </table>

                    {/* Scrollable Variants Columns */}
                    <div className={styles.scrollableTableWrapper}>
                        <table className={styles.scrollableTable}>
                            <thead>
                                <tr>
                                    {variants.map((variant, index) => (
                                        <th key={index} className={styles.th}>
                                            <div className={styles.variant_head_text}>
                                                {variant}
                                            </div>
                                            {/* <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
                                                    fill="#000000"
                                                />
                                            </svg> */}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, rowIndex) => (
                                    <DraggableRow key={row.id} id={row.id} index={rowIndex} moveRow={moveRow}>
                                        {row.variants?.map((variantData, colIndex) => (
                                            <td key={colIndex} className={styles.td_design}>
                                                <div className={styles.card_design}>
                                                    {variantData.img ?
                                                        <>
                                                            <div className={styles.design_wrapper}>
                                                                <img src={variantData.img}
                                                                    className={styles.design} />
                                                                <div className={styles.add_design} onClick={() => openModalForRow(row.id, variantData.id)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                                </div>
                                                            </div>
                                                            <div className={styles.design_title}>{variantData.imgTitle}</div>
                                                        </>
                                                        :
                                                        <div className={styles.new_design_add} onClick={() => openModalForRow(row.id, variantData.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                            <div>Add Design</div>
                                                        </div>
                                                    }
                                                </div>
                                            </td>
                                        ))}
                                    </DraggableRow>
                                ))}
                            </tbody>
                        </table>
                        <button className={styles.addVariantBtn} onClick={addVariant}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                    </div>
                </div>

                <button className={styles.addVariantBtn} onClick={addState}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>                </button>

                {isModalVisible &&
                    <div className={styles.modal_screen} onClick={handleModalClose}>
                        <Modal handleNewDesign={handleNewDesign} handleModalClose={handleModalClose} />
                    </div>}
            </div>

        </DndProvider>
    );
}


