import React from 'react'
import '../../assets/css/dashboard.css';
import birdIcon from '../../assets/images/birdIcon.png';
// import WebSideBar from '../../components/SideBar/WebSideBar';


export default function Dashboard() {

    
    // const routerHistory = useHistory();

    // console.log(localStorage.getItem('user'));
    // useEffect(() => {
    //     let JWTToken = localStorage.getItem('user');
    //     dashboard();
    //     async function dashboard() {
    //         try {
    //             let res = await axios.get('/dashboard', { headers: { "Authorization": `Bearer ${JWTToken}` } });
    //         }
    //         catch (error) {
    //             console.log(error);
    //             routerHistory.push('/beapart');
    //         }
    //     }
    // }, []);

    // using fetch method
    // fetch('/dashboard')
    //     .then((response) => {
    //         if (response.status == 200) {
    //             routerHistory.push('/dashboard');
    //         } else if (response.status == 401) {
    //             routerHistory.push('/beapart');
    //         } else {
    //             routerHistory.push('/beapart');
    //         }
    //     })
    //     .catch((error) => {
    //         routerHistory.push('/beapart');
    //     });


    return (
        <div className="dashboard">
            <div className="dashboard-content">

                <h1 className=" dash-title title text-center ">Hey Mockingbird!!</h1>
                <h2>Write and share your own Blogs and Stories.</h2>
                <img className="mt-5" src={birdIcon} alt="bird-icon" />

            </div>

        </div>

    )
}