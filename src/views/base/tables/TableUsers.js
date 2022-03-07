import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CFormLabel, CLink, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
// import { DocsCallout, DocsExample } from 'src/components'
import axios from "../../../axios";
import response from "core-js/internals/is-forced";
const TableUsers = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`/users`)
      .then((response) => {
        setAPIData(response.data.data);
      })
  }, [])

  const [APIDataDetail, setAPIDataDetail] = useState([]);
  useEffect(() => {
    detailUser();
  }, []);
  const detailUser = async (id) => {
    await axios.delete(`user/${id}`);
    setAPIDataDetail(response.data.data);
  }

  const [visible, setVisible] = useState(false)
  return (
    <>
  <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
    <CModalHeader>
      <CModalTitle>Data Detail User</CModalTitle>
    </CModalHeader>
    {APIDataDetail.map((data) => {
      return (
    <CModalBody key={data.id}>
      <CFormLabel htmlFor="exampleFormControlInput1">Nama : {data.name}</CFormLabel> <br/>
      <CFormLabel htmlFor="exampleFormControlInput1">Age :</CFormLabel> <br/>
      <CFormLabel htmlFor="exampleFormControlInput1">MM Percent :</CFormLabel> <br/>
      <CFormLabel htmlFor="exampleFormControlInput1">Bond Percent :</CFormLabel> <br/>
      <CFormLabel htmlFor="exampleFormControlInput1">Stock Percent :</CFormLabel>
    </CModalBody>
      )
    })}
    <CModalFooter>
      <CButton color="secondary" onClick={() => setVisible(false)}>
        Close
      </CButton>
    </CModalFooter>
  </CModal>
    <CRow>
      <CCol xs={12}>
        {/*<DocsCallout name="Table" href="components/table" />*/}
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Data User</strong>
          </CCardHeader>
          <CCardBody>
            {/*<DocsExample href="components/table">*/}
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">No.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Age</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Aksi</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {APIData.map((data, index) => {
                  return (
                    <CTableRow key={data.id}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>
                        {data.name}
                      </CTableDataCell>
                      <CTableDataCell>
                        {data.age}
                      </CTableDataCell>

                          <CTableDataCell >
                            {APIDataDetail.map((data) => {

                            <CLink key={data.id} onClick={() => setVisible(!visible)} color="info" shape="rounded-pill">Detail
                              {/*onClick={() => detailUser(data.id)*/}

                            </CLink>


                            })}
                          </CTableDataCell>

                    </CTableRow>
                  )
                })}
              </CTableBody>

            </CTable>
            {/*</DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
      </>
  );
}
export default TableUsers;



