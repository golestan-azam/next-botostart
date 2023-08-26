"use client"

import { useState } from "react";
import styles from "@/template/AddProfilePage.module.css";

function AddProfilePage(props) {
    const [profileData, setProfileData] = useState({
        tilte: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        ruls: [],
        amenities: []
    })
    return (
        <div>
            AddProfilePage
        </div>
    );
}

export default AddProfilePage;