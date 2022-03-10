import React, { useEffect, useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader, CCardText,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from '../../../axios'

const DetailUser = () => {
  const [detail, setDetail] = useState([])
  const [statusFetch, setstatusFetch] = useState(true)
  var id = localStorage.getItem('id')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/user/${id}`)
        let result = data.data
        setDetail({
          id: result.id,
          name: result.user.name,
          age: result.user.age,
          mm_percent: result.mm_percent,
          bond_percent: result.bond_percent,
          stock_percent: result.stock_percent,
        })
      } catch (error) {
        alert('error')
      }
    }
    if (statusFetch) {
      fetchData()
      setstatusFetch(false)
    }
  }, [statusFetch, setstatusFetch])

  return (
    <>
      {/*<CCard className="mb-4">*/}
      {/*  <CCardHeader>Detail User</CCardHeader>*/}
        {/*<CCardBody>*/}
        {/*  <CRow>*/}
            <CTable>
                <CTableHead>
                </CTableHead>
                <CTableBody>
                  <CTableRow color="primary">
                    <CTableHeaderCell scope="row">Nama</CTableHeaderCell>
                    <CTableDataCell>:</CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell>{detail.name}</CTableDataCell>

                  </CTableRow>
                  <CTableRow color="secondary">
                    <CTableHeaderCell scope="row">Umur</CTableHeaderCell>
                    <CTableDataCell>:</CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell>{detail.age}</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="success">
                    <CTableHeaderCell scope="row">MM Percent</CTableHeaderCell>
                    <CTableDataCell>:</CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell>{detail.mm_percent}%</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="danger">
                    <CTableHeaderCell scope="row">Bond Percent</CTableHeaderCell>
                    <CTableDataCell>:</CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell>{detail.bond_percent}%</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="warning">
                    <CTableHeaderCell scope="row">Stock Percent</CTableHeaderCell>
                    <CTableDataCell>:</CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell>{detail.stock_percent}%</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="default">
                    <CTableHeaderCell scope="row"></CTableHeaderCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                  </CTableRow>
                </CTableBody>
            </CTable>
            {/* <CForm>
              <div className="me-5">
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                  <CFormInput
                    type="text"
                    placeholder="Disabled readonly input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                  <CFormInput
                    type="text"
                    placeholder="Disabled readonly input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Category</CFormLabel>
                  <CFormInput
                    type="text"
                    placeholder="Disabled readonly input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                </div>
              </div>
            </CForm> */}
          {/*</CRow>*/}
        {/*</CCardBody>*/}
      {/*</CCard>*/}
    </>
  )
}

export default DetailUser
