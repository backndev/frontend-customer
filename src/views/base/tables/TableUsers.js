import React, { useEffect, useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import axios from '../../../axios'
import { Link } from 'react-router-dom'
import {cilFace} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

function TableUsers() {
  const [data_list, set_data_list] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    axios
      .get('/users')
      .then((response) => {
        const data = response.data.data
        set_data_list(data)
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }, [])
  const handleDetail = (event) => {
    let id = parseInt(event.target.value)
    localStorage.setItem('id', id)
    // history.push(`/detail-user/${idUser}`)
    setVisible(!visible)
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CTable striped hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">No.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Umur</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {
                  // calling state variable data to filter data inside table
                  data_list.map((data, index) => {
                    return (
                      <CTableRow key={data.id}>
                        <CTableDataCell>{index + 1}</CTableDataCell>
                        <CTableDataCell>{data.name}</CTableDataCell>
                        <CTableDataCell>{data.age}</CTableDataCell>
                        <CTableDataCell>
                          <Link to="/user">
                            <CButton color="info" variant="outline" onClick={handleDetail} value={data.id}><CIcon icon={cilFace}/> Detail</CButton>
                          </Link>
                          {/* <CModal visible={visible} onClose={() => setVisible(false)}>
                            <CModalHeader onClose={() => setVisible(false)}>
                              <CModalTitle>Detail User</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                              <CTable>
                                <CTableHead>
                                  <CTableRow>
                                    <CTableHeaderCell scope="col">userid</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">age</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">mm(%)</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">bond(%)</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">stock(%)</CTableHeaderCell>
                                  </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                  <CTableRow>
                                    <CTableHeaderCell scope="row">{data.userid}</CTableHeaderCell>
                                    <CTableDataCell>{data.name}</CTableDataCell>
                                    <CTableDataCell>Otto</CTableDataCell>
                                    <CTableDataCell>@mdo</CTableDataCell>
                                    <CTableDataCell>@mdo</CTableDataCell>
                                    <CTableDataCell>@mdo</CTableDataCell>
                                  </CTableRow>
                                </CTableBody>
                              </CTable>
                            </CModalBody>
                            <CModalFooter>
                              <CButton color="secondary" onClick={() => setVisible(false)}>
                                Close
                              </CButton>
                            </CModalFooter>
                          </CModal> */}
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })
                }
              </CTableBody>
            </CTable>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default TableUsers;
