import React, { useState } from "react";

// components
import Loader from "./components/Loader";
import Input from "./components/Input";

// firebase configs
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "firebase.config";

// animations
import { motion } from "framer-motion";

// categories
import { categories } from "utils/data";

// icons
import { IoFastFoodOutline, IoCloudUploadOutline } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdFoodBank, MdAttachMoney } from "react-icons/md";
import { saveItem } from "utils/fireBaseFunctions";
import useGetDataFromDb from "hook/useGetDataFromDb";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [calories, setColories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const { getDataFromDb } = useGetDataFromDb();

  // upload image handler
  const uploadImage = (e) => {
    setIsloading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()} - ${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMessage("Error while uploading : Try Again");
        setAlertStatus("danger");

        setTimeout(() => {
          setFields(false);
          setIsloading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageAsset(downloadUrl);
          setIsloading(false);
          setFields(true);
          setMessage("Image uploaded successfully");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  // delete image handler
  const deleteImage = () => {
    setIsloading(true);
    const deleteRef = ref(storage, imageAsset);

    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsloading(false);
      setFields(true);
      setMessage("Image deleted successfully");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  // save Details handler
  const saveDetails = () => {
    setIsloading(true);

    if (!title || !calories || !imageAsset || !price || !category) {
      setFields(true);
      setMessage("Required fields can't be empty");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsloading(false);
      }, 4000);
    } else {
      const data = {
        id: `${Date.now()}`,
        title: title,
        imageURL: imageAsset,
        category: category,
        calories: calories,
        qty: 1,
        price: price,
      };

      saveItem(data);
      setIsloading(false);
      setFields(true);
      setMessage("Data saved successfully");
      clearData();
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    }
    try {
    } catch (error) {
      console.log(error);
      setFields(true);
      setMessage("Error while uploading : Try Again");
      setAlertStatus("danger");

      setTimeout(() => {
        setFields(false);
        setIsloading(false);
      }, 4000);
    }

    getDataFromDb();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setColories("");
    setPrice("");
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {message}
          </motion.p>
        )}
        {/* Enter title================================== */}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <IoFastFoodOutline />
          <Input
            type="text"
            value={title}
            func={setTitle}
            placeholder={"Enter Title"}
          />
        </div>
        {/* Enter title================================// */}
        {/* Enter category=============================== */}
        <div className="w-full">
          <select
            className="outline-none w-full text-base border-b border-gray-300 p-2  cursor-pointer"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option
                className="text-base border-0 outline-none capitalize bg-white text-black"
                key={category.id}
                value={category.urlParamName}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {/* Enter category=============================// */}
        {/* Upload image================================= */}
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center cursor-pointer gap-3">
                      <IoCloudUploadOutline className="text-gray-500 text-3xl hover:text-gray-700" />
                      <p className="text-gray-500 hover:text-gray-700">
                        Click to upload
                      </p>
                    </div>
                    <input
                      type={"file"}
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      hidden
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={imageAsset}
                      alt="upload"
                    />
                    <button
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      type="button"
                      onClick={deleteImage}
                    >
                      <AiTwotoneDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        {/* Upload image===============================// */}
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          {/* Enter calories=============================== */}
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray-700 text-2xl" />
            <Input
              type="text"
              value={calories}
              func={setColories}
              placeholder={"Enter Calories"}
            />
          </div>
          {/* Enter calories=============================// */}
          {/* Enter price================================== */}
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-700 text-2xl" />
            <Input
              type="number"
              value={price}
              func={setPrice}
              placeholder={"Enter Price"}
            />
          </div>
          {/* Enter price================================// */}
        </div>
        <div className="flex items-center w-full">
          <button
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
