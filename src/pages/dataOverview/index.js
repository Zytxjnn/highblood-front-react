import React,{memo,useEffect,} from "react";
import {useDispatch,} from 'react-redux';

import {jsPDF} from 'jspdf';
import html2canvas from  'html2canvas';
import {Row,Col} from 'antd'

import DataHeader from '@/components/dataHeader';
import DataViewCenter from './c-pages/center';
import DataViewLeft from './c-pages/left';
import DataViewRight from './c-pages/right';
import NextBtn from './c-coms/nextBtn/nextBtn';
import SideBar from '@/components/sideBar';

import {
  Wrapper
} from "./style";

import {getContentAction} from './store/actionCreator'


export default memo(function DataOverview(props){
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContentAction());
  },[dispatch]);


  // useEffect(() => {
  //   setTimeout(() => {
  //     const PDF = new jsPDF();
  //     const body = document.querySelector('body');
  //     html2canvas(body, {
  //       // allowTaint: true
  //       allowTaint: true,
  //       taintTest: false,
  //       scale: 2
  //     }).then(function (canvas1) {
  //       let contentWidth = canvas1.width
  //       let contentHeight = canvas1.height
  //       let pageHeight = contentWidth / 592.28 * 841.89
  //       let leftHeight = contentHeight
  //       let imgWidth = 595.28
  //       let imgHeight = 592.28 / contentWidth * contentHeight
  //       var pageData = canvas1.toDataURL('image/jpeg', 1.0)
  //       let position = 0
  //       if (leftHeight < pageHeight) {
  //         PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
  //       } else {
  //         while (leftHeight > 0) {
  //           PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
  //           leftHeight -= pageHeight
  //           position -= 841.89
  //           if (leftHeight > 0) {
  //             PDF.addPage()
  //           }
  //         }
  //       }
  //       PDF.save('a.pdf')
  //     })
  //   },3000)
  // },[]);


  return (
    <Wrapper>
      <DataHeader />
      <Row>
        <Col span={6}>
          <DataViewLeft/>
        </Col>
        <Col span={12}>
          <DataViewCenter />
        </Col>
        <Col span={6}>
          <DataViewRight/>
        </Col>
      </Row>
      <NextBtn/>
      <SideBar/>
    </Wrapper>
  )
})
