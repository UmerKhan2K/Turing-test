import React, { useEffect, useState } from 'react';
import {getCalls,setAuthToken} from '../services/api';


function CallList(props) {
  const [calls, setCalls] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  useEffect(() => {
    const fetchCalls = async () => {
      try {
        setAuthToken(props.tt)
        const response = await getCalls(0,100);
        const { nodes } = response.data;
        
        console.log(nodes,'vishis');
        setCalls(nodes);
        setTableData(nodes);
      } catch (error) {
        console.log("Error in fetching calls")
      }
    };

    fetchCalls();
  }, [offset, limit]);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = tableData.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div>
    
       <table>
      <thead>
        <tr>
          <th>Call type</th>
          <th>Direction</th>
          <th>Duration</th>
          <th>From</th>
          <th>to</th>
          <th>VIA</th>
          <th>Created at</th>
          <th>Status</th>
          <th>Actions</th>
      
        </tr>
      </thead>
      <tbody>
        {currentRecords.map((call, index) => (
          
          <tr key={index}>
            <td>{call.call_type}</td>
            <td>{call.direction}</td>
            <td>{call.duration}</td>
            <td>{call.from}</td>
            <td>{call.to}</td>
            <td>{call.via}</td>
            <td>{call.created_at}</td>
            <td>{call.is_archived}</td>
           

          </tr>
        ))}
      </tbody>
    </table>
    <div>
        {/* Pagination */}
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastRecord >= tableData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default CallList;
