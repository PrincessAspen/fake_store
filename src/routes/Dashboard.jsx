import { Form } from 'react-router-dom'

export const action = async({request}) => {
    const formData = await request.formData();
    const apiUrl = `${import.meta.env.VITE_API_URL}/create/product`
    const jsonData = Object.fromEntries(formData.entries());

    const data = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${sessionStorage.getItem('sb-access-token')}`
        },
        body: JSON.stringify(jsonData),
    }).then((response) => response.json())

    console.log(data);

    return true;
    }




const Dashboard = () => {
    return (<>
    <Form action='/dashboard' method="POST">
        <label>Product Name<input type='text' name='name'/></label>
        <label>Price<input type='text' name='price'/></label>
        <label>Quality<input type='text' name='quality'/></label>
        <label>Summary<input type='text' name='summary'/></label>
        <label>Image URL<input type='text' name='image'/></label>
        <button type='submit'>Submit</button>
    </Form></>)
}

export default Dashboard;