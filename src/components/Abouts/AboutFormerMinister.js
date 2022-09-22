import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Pagination from './Pagination'
function AboutFormerMinister(){

	const[user,setUser]=useState([

	{
      id:1,
      name:"SMT. NIRMALA SITHARAMAN",
      FromDate:"	07.09.17",
      ToDate:"30.05.19"
    },
    {
      id:2,
      name:"SHRI ARUN JAITLEY",
      FromDate:"13.03.17",
      ToDate:"06.09.17"
    },
    {
      id:3,
      name:"SHRI MANOHAR PARRIKAR",
      FromDate:"09.11.14",
      ToDate:"13.03.17"
    },
    {
      id:4,
      name:"SHRI ARUN JAITLEY",
      FromDate:"26.05.14",
      ToDate:"08.11.14"
    },
    {
      id:5,
      name:"SHRI A.K. ANTONY",
      FromDate:"25.10.06",
      ToDate:"26.05.14"
    },
    {
      id:6,
      name:"SHRI PRANAB MUKHERJEE",
      FromDate:"23.05.04",
      ToDate:"24.10.06"
    },
    {
      id:7,
      name:"SHRI GEORGE FERNANDES",
      FromDate:"15.10.01",
      ToDate:"22.05.04"
    },
    {
      id:8,
      name:"SHRI JASWANT SINGH",
      FromDate:"16.03.01",
      ToDate:"14.10.01"
    },
    {
      id:9,
      name:"SHRI GEORGE FERNANDES",
      FromDate:"19.03.98",
      ToDate:"15.03.01"
    },

    {
      id:10,
      name:"SHRI MULAYAM SINGH YADAV",
      FromDate:"01.06.96",
      ToDate:"19.03.98"
    },
    {
      id:11,
      name:"	SHRI PRAMOD MAHAJAN",
      FromDate:"17.05.96",
      ToDate:"31.05.96"
    },{
      id:12,
      name:"SHRI P.V. NARASIMHA RAO (PM)",
      FromDate:"05.03.93",
      ToDate:"16.05.96"
    },
    {
      id:13,
      name:"SHRI SHARAD PAWAR",
      FromDate:"26.06.91",
      ToDate:"	05.03.93"
    },
    {
      id:14,
      name:"SHRI P.V. NARASIMHA RAO (PM)",
      FromDate:"21.06.91",
      ToDate:"	25.06.91"
    },
    {
      id:15,
      name:"SHRI CHANDRA SHEKHAR (PM)",
      FromDate:"21.11.90",
      ToDate:"20.06.91"
    },

    {
      id:16,
      name:"SHRI V.P.SINGH (PM)",
      FromDate:"06.12.89",
      ToDate:"10.11.90"
    },
    {
      id:17,
      name:"SHRI K.C. PANT",
      FromDate:"18.04.87",
      ToDate:"	03.12.89"
    },

	{
      id:18,
      name:"SHRI V.P. SINGH",
      FromDate:"25.01.87",
      ToDate:"25.01.87"
    },
    {
      id:19,
      name:"SHRI RAJIV GANDHI (PM)",
      FromDate:"25.09.85",
      ToDate:"24.01.87"
    },
    {
      id:20,
      name:"SHRI P.V. NARASIMHA RAO",
      FromDate:"01.01.85",
      ToDate:"24.09.85"
    },
    {
      id:21,
      name:"SHRI S.B. CHAVAN",
      FromDate:"03.08.84",
      ToDate:"31.12.84"
    },
    {
      id:22,
      name:"31.12.84",
      FromDate:"31.12.84",
      ToDate:"01.08.84"
    },
    {
      id:23,
      name:"SMT. INDIRA GANDHI (PM)",
      FromDate:"14.01.80",
      ToDate:"	15.01.82"
    },

    {
      id:24,
      name:"15.01.82",
      FromDate:"30.07.79",
      ToDate:"14.01.80"
    },
    {
    	id:25,
    	name:"SHRI JAGJIVAN RAM",
    	FromDate:"28.03.77",
    	ToDate:"27.07.79"
    }
    




		])

// 

const[user3,setUser3]=useState([

{
 id:1,
 name:"Rao Inderjit Singh",
 FromDate:"	29-01-2006",
 ToDate:"22-05-2009"
},
{
 id:2,
 name:"Shri B.K. Handique",
 FromDate:"23-05-2004",
 ToDate:"30-11-2004"
},
{
 id:3,
 name:"Shri Harin Pathak",
 FromDate:"15-10-2001",
 ToDate:"29-01-2003"
},
{
 id:4,
 name:"Shri Suresh Pachouri",
 FromDate:"	15-09-1995",
 ToDate:"16-05-1996"
}
	])



// 

 const [showPerPage, setShowPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
	return(
<div>
<img src="https://www.mod.gov.in/sites/all/themes/cmf/images/banner/inner-banner.jpg" class="w-100" />
<div class="container text-justify">
 <p className="page_path_on-component"><em><span className="page_path_on-component-color"><Link to="/" className="page_path_on-component-color">HOME >></Link> ABOUT Us + </span>>> FORMER MINISTORY</em></p>
 <h4 className="home-about-minisory_heading">FORMER MINISTRY</h4>
	
<table class="table  table-bordered table-striped ">
  <thead>
    <tr class="table-dark">
      <th scope="col">S.No.</th>
      <th scope="col">Name</th>
      <th scope="col">From Date</th>
      <th scope="col">To Date</th>
    </tr>
  </thead>
  {user.slice(pagination.start, pagination.end).map((data)=>{
  	return(
 <tbody key={user.id}>
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.name}</td>
      <td>{data.FromDate}</td>
      <td>{data.ToDate}</td>
    </tr>
    
   
  </tbody>


  		)
  })}
 
</table>
<Pagination 
 showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={user.length}
/>
</div>
{/**/}

{/**/}
<br />

<div className="container text-justify">
 <h4 className="home-about-minisory_heading">Former Raksha Utpadan Rajya Mantri</h4>
	
<table class="table  table-bordered table-striped ">
  <thead>
    <tr class="table-dark">
      <th scope="col">S.No.</th>
      <th scope="col">Name</th>
      <th scope="col">From Date</th>
      <th scope="col">To Date</th>
    </tr>
  </thead>
  {user3.map((data)=>{
  	return(
 <tbody key={user.id}>
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.name}</td>
      <td>{data.FromDate}</td>
      <td>{data.ToDate}</td>
    </tr>
    
   
  </tbody>


  		)
  })}
 
</table>
</div>
</div>

		)
}
export default AboutFormerMinister