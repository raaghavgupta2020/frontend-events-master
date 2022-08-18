// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tables from './Tables/Tables'
import UNavbar from '../UNavbar'
import { UserData } from '../../Data'
import BarChart from '../BarChart'
import LineChart from '../LineChart'
import AdminNav from '../AdminNav'
import axios from 'axios'

const Dashboard = () => {
    const api_key = "ZAC8GCM5D7A2RYV6VH6MRJ5IDR34HXQ4S7"
    const [transactions, setTransactions] = useState('')
    const [address, setAddress] = useState("0xb91dd8225Db88dE4E3CD7B7eC538677A2c1Be8Cb")
    const url = `https://api.polygonscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${api_key}`
    console.log(url)
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Revenue gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
    useEffect(() => {
        axios.get(url).then((res) => {
            setTransactions(res.data.result)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            console.log("finally")
        }
        )
    }, [])
    console.log(transactions)
    return (
        <>
            <AdminNav />
            <div>
                <div class="flex flex-col mx-10">
                    <h1 className='text-2xl mt-8 mb-10'>Transaction History</h1>
                </div>
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto mx-10">
                        <div class="py-2 align-middle inline-block w-full mx-auto">
                            <div class="shadow overflow-hidden border-b border-pur sm:rounded-lg">
                                <table class="min-w-full divide-y divide-pur">
                                    <thead class="bg-black">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">S.No</th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">From</th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">

                                        {/* {data.map(item => {
                    
                    return (
                      <Tables  />
                    )
                  })} */}
                                        {
                                            transactions && transactions.map((item, index) => {
                                                return (
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">{index + 1}</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">{item.from}</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">{item.gasUsed}</td>
                                                    </tr>
                                                )
                                            }

                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col mx-10">
                        <h1 className='text-2xl mt-8 mb-10'>Revenue</h1>
                    </div>
                    <div className="mx-10 flex">
                        <div style={{ width: 700 }}>
                            <BarChart chartData={userData} />
                        </div>
                        <div style={{ width: 700 }} className='mx-20'>
                            <LineChart chartData={userData} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard;