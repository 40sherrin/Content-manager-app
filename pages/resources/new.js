import Layout from "components/Layout";
import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router'

const DEFAULT_DATA = {
    title: '',
    description: '',
    link: '',
    priority: '2',
    timeToFinish: 60
}

const ResourceCreate = () => {
    const [form, setForm] = useState(DEFAULT_DATA)
    const router = useRouter()

    const submitForm = () => {
        axios.post('/api/resources', form).then(res => router.push('/')).catch(err => alert(err?.response?.data))
    }

    const resetForm = () => {
        setForm(DEFAULT_DATA)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <div className="resource-form">
                            <h1 className="title">Add New Resource</h1>
                            <form>
                                <div className="field">
                                    <label className="label">Title</label>
                                    <div className="control">
                                        <input onChange={handleChange} name="title" value={form.title} className="input" type="text" placeholder="e.g Learning JavaScript" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Description</label>
                                    <div className="control">
                                        <textarea
                                        onChange={handleChange}
                                        value={form.description}
                                        name="description"
                                        className="textarea"
                                        placeholder="Learn these technologies because they are very popular and enable better SEO"></textarea>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Link</label>
                                    <div className="control">
                                        <input onChange={handleChange} name="link" value={form.link} className="input" type="text" placeholder="e.g http://image.com" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Priority</label>
                                    <div className="control">
                                        <div className="select">
                                        <select onChange={handleChange} name="priority" value={form.priority}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Time to finish</label>
                                    <div className="control">
                                        <input onChange={handleChange} name="timeToFinish" value={form.timeToFinish} className="input" type="text" placeholder="e.g Before 19 June" />
                                    </div>
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button onClick={submitForm} type="button" className="button is-link">Submit</button>
                                    </div>
                                    <div className="control">
                                        <button onClick={resetForm} type="button" className="button is-link is-light">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ResourceCreate