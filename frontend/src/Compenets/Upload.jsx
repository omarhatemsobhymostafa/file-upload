import React from 'react'

export default function Upload() {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const file = e.target.fileInput.files[0]
        const formData = new FormData()
        formData.append("file", file)

        try {
            const res = await fetch("http://localhost:3000/upload", { method: "POST", body: formData })

            if (!res.ok) throw new Error(`Server error: ${res.status}`)
            const data = await res.json()
            console.log("Upload successful", data)
        } catch (err) {
            console.error("Upload failed", err)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name="fileInput" id="fileInput" />
            <button type="submit">Upload</button>
        </form>
    )
}