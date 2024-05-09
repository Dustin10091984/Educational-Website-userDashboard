'use client'
import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets } from '@/redux/features/tickets/ticketsSlice'
import { FaStar } from 'react-icons/fa' // Import the star icon

const TicketTable = () => {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.ticketsR.entities)
  const isLoading = useSelector((state) => state.ticketsR.isLoading)
  const isError = useSelector((state) => state.ticketsR.isError)

  const StarRenderer = ({ value }) => {
    // 'value' is the number of stars from the rowData
    const renderStars = (count) => {
      let stars = []
      for (let i = 0; i < count; i++) {
        stars.push(<FaStar key={i} />)
      }
      return <>{stars}</>
    }

    return <div className='flex'>{renderStars(value)}</div>
  }
  // Row Data: The data to be displayed.
  // const [rowData, setRowData] = useState()

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { headerName: 'ردیف', valueGetter: 'node.rowIndex + 1', width: 100 },
    { field: 'title' },
    { field: 'department' },
    { field: 'تاریخ' },
    { field: 'open' },
    { field: 'stars' },
    {
      headerName: 'مشاهده',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: (row) => {
          // Handle button click for the specific row
          console.log('Button Clicked for Row:', row.data)
        },
      },
    },
  ])
  // const [tickets, setTickets] = useState([])
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  if (isLoading) return <div className='text-white'>Loading...</div>
  if (isError) return <div>Error loading products</div>

  const frameworkComponents = {
    buttonRenderer: ButtonRenderer,
  }

  return (
    <div
      className='ag-theme-alpine-dark  animate-fade-up animate-once animate-duration-[1000ms] w-full '
      style={{ height: 700, fontFamily: 'IRANSansWeb' }}
    >
      <AgGridReact
        rowData={tickets} // Pass the tickets from Redux state directly
        columnDefs={colDefs}
        enableRtl={true}
        frameworkComponents={frameworkComponents}
      />
    </div>
  )
}

//Custom Button Renderer Component
const ButtonRenderer = (props) => {
  const handleClick = () => {
    props.onClick(props.node)
  }

  return (
    <button className='text-black' onClick={handleClick}>
      Click Me
    </button>
  )
}

export default TicketTable
