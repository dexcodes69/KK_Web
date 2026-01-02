import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { useLoadingState } from '../hooks/useLoadingState';
import LoadingSpinner from '../components/LoadingSpinner';
import { assets } from '../assets/assets'

const List = ({ token }) => {
  const [list, setList] = useState([])
  const { isLoading, withLoading } = useLoadingState();
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editImages, setEditImages] = useState(Array(12).fill(false));

  const fetchList = async () => {
    withLoading(async () => {
      try {
        const response = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
        if (response.data.success) setList(response.data.products.reverse());
      } catch (error) { toast.error("Failed to fetch list") }
    });
  };

  const removeProduct = async (id) => {
    if (!window.confirm("Remove this variant?")) return;
    withLoading(async () => {
      try {
        const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
        if (response.data.success) { toast.success("Removed Successfully"); await fetchList(); }
      } catch (error) { toast.error(error.message) }
    })
  }

  const openEditModal = (item) => {
    const itemClone = JSON.parse(JSON.stringify(item));
    setEditData(itemClone);
    const initialImages = Array(12).fill(false);
    (itemClone.images || []).forEach((img, i) => { if(i < 12) initialImages[i] = img; });
    setEditImages(initialImages);
    setEditMode(true);
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Updating Portfolio...");
    withLoading(async () => {
        try {
            const formData = new FormData();
            formData.append("id", editData._id);
            formData.append("name", editData.name);
            formData.append("description", editData.description);
            formData.append("price", editData.price);
            formData.append("category", editData.category);
            formData.append("subCategory", editData.subCategory);
            formData.append("rashi", editData.category === "Rashi" ? editData.rashi : "");
            formData.append("threadCounts", JSON.stringify(editData.threadCounts));
            formData.append("priceMatrix", JSON.stringify(editData.priceMatrix));

            editImages.forEach((img, index) => {
                if (img) {
                    if (typeof img === 'string') formData.append(`imageUrl${index + 1}`, img);
                    else formData.append(`image${index + 1}`, img);
                }
            });

            const response = await axios.post(backendUrl + '/api/product/update', formData, { headers: { token } });
            if (response.data.success) {
                toast.update(toastId, { render: "Updated Successfully", type: "success", isLoading: false, autoClose: 3000 });
                setEditMode(false);
                await fetchList();
            }
        } catch (error) { toast.error(error.message) }
    });
  }

  const onMatrixEdit = (size, field, value) => {
    const updatedMatrix = { ...editData.priceMatrix };
    const tcKey = editData.category === "Rashi" ? "Rashi" : (editData.threadCounts?.['500TC'] ? '500TC' : '300TC');
    const sub = editData.subCategory;

    if (!updatedMatrix[tcKey]) updatedMatrix[tcKey] = {};
    if (!updatedMatrix[tcKey][sub]) updatedMatrix[tcKey][sub] = {};
    if (!updatedMatrix[tcKey][sub][size]) updatedMatrix[tcKey][sub][size] = { sale: 0, original: 0 };

    updatedMatrix[tcKey][sub][size][field] = Number(value);
    setEditData({ ...editData, priceMatrix: updatedMatrix });
  };

  useEffect(() => { fetchList() }, [])

  return (
    <LoadingSpinner isLoading={isLoading}>
      <div className='p-6 bg-white'>
        <p className='mb-6 font-serif text-2xl italic'>Curated Atelier Inventory</p>
        
        <div className='flex flex-col gap-2'>
          {list.map((item, index) => (
            <div className='grid grid-cols-[0.7fr_2fr_1fr_1.2fr_1fr] items-center gap-4 py-4 px-4 border-b text-sm' key={index}>
              <img className='w-16 h-20 object-cover rounded shadow-sm' src={item.images?.[0]} alt="" />
              <div>
                <p className='font-bold'>{item.name}</p>
                <p className='text-[10px] text-stone-400'>{item.subCategory}</p>
              </div>
              <p className='text-xs uppercase text-stone-500 font-bold tracking-widest'>{item.category}</p>
              <p className='font-bold text-green-700'>{currency}{item.price.toLocaleString()}</p>
              <div className='flex gap-4 justify-center'>
                <button onClick={() => openEditModal(item)} className='text-blue-600 font-bold underline'>EDIT</button>
                <button onClick={() => removeProduct(item._id)} className='text-red-400'>REMOVE</button>
              </div>
            </div>
          ))}
        </div>

        {editMode && (
            <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm'>
                <div className='bg-white p-8 rounded-xl w-full max-w-4xl max-h-[95vh] overflow-y-auto shadow-2xl'>
                    <div className='flex justify-between items-center mb-8 border-b pb-4'>
                        <h2 className='text-2xl font-serif italic text-stone-800'>Refine Portfolio Variant</h2>
                        <button onClick={()=>setEditMode(false)} className='text-stone-400 hover:text-black'>✕</button>
                    </div>
                    <form onSubmit={handleUpdate} className='flex flex-col gap-6'>
                        <div className='bg-stone-50 p-6 rounded border grid grid-cols-6 gap-2'>
                            {editImages.map((img, index) => (
                                <label key={index} className="cursor-pointer">
                                    <img className='w-full aspect-[3/4] object-cover border-2 hover:border-black transition-all' 
                                         src={!img ? assets.upload_area : (typeof img === 'string' ? img : URL.createObjectURL(img))} alt="" />
                                    <input type="file" hidden onChange={(e) => {
                                        const newImgs = [...editImages];
                                        newImgs[index] = e.target.files[0];
                                        setEditImages(newImgs);
                                    }} />
                                </label>
                            ))}
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div className='col-span-2'>
                                <label className='text-[10px] font-bold uppercase tracking-widest'>Name</label>
                                <input className='border p-2 w-full outline-none' value={editData.name} onChange={e=>setEditData({...editData, name: e.target.value})} />
                            </div>

                            <div>
                                <label className='text-[10px] font-bold uppercase tracking-widest'>Category</label>
                                <select 
                                    className='border p-2 w-full outline-none' 
                                    value={editData.category} 
                                    onChange={(e) => {
                                        const newCat = e.target.value;
                                        const oldTC = editData.category === "Rashi" ? "Rashi" : (editData.threadCounts?.['500TC'] ? '500TC' : '300TC');
                                        const newTC = newCat === "Rashi" ? "Rashi" : (editData.threadCounts?.['500TC'] ? '500TC' : '300TC');
                                        const sub = editData.subCategory;
                                        const updatedMatrix = { ...editData.priceMatrix };

                                        if (updatedMatrix[oldTC]?.[sub] && !updatedMatrix[newTC]?.[sub]) {
                                            updatedMatrix[newTC] = { [sub]: JSON.parse(JSON.stringify(updatedMatrix[oldTC][sub])) };
                                        }

                                        setEditData({...editData, category: newCat, priceMatrix: updatedMatrix});
                                    }}
                                >
                                    <option value="Bedding">Luxury Bedding</option>
                                    <option value="Rashi">Celestial Rashi</option>
                                </select>
                            </div>

                            <div>
                                <label className='text-[10px] font-bold uppercase tracking-widest'>Sub-Category</label>
                                <select 
                                    className='border p-2 w-full outline-none' 
                                    value={editData.subCategory} 
                                    onChange={(e) => {
                                        const newSub = e.target.value;
                                        const oldSub = editData.subCategory;
                                        const tcKey = editData.category === "Rashi" ? "Rashi" : (editData.threadCounts?.['500TC'] ? '500TC' : '300TC');
                                        const updatedMatrix = { ...editData.priceMatrix };

                                        if (updatedMatrix[tcKey]?.[oldSub] && !updatedMatrix[tcKey][newSub]) {
                                            updatedMatrix[tcKey][newSub] = JSON.parse(JSON.stringify(updatedMatrix[tcKey][oldSub]));
                                        }

                                        setEditData({...editData, subCategory: newSub, priceMatrix: updatedMatrix});
                                    }}
                                >
                                    <option value="Complete Bed Set">Complete Bed Set</option>
                                    <option value="Fitted Sheet">Fitted Sheet</option>
                                    <option value="Flat Sheet">Flat Sheet</option>
                                    <option value="Duvet Cover">Duvet Cover</option>
                                </select>
                            </div>

                            {editData.category === "Bedding" && (
                                <div className='col-span-2 bg-stone-50 p-4 rounded border border-stone-100'>
                                    <label className='text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-2'>Material Thread Count</label>
                                    <select 
                                        className='border p-2 w-full outline-none bg-white font-bold text-xs' 
                                        value={editData.threadCounts?.['500TC'] ? '500TC' : '300TC'} 
                                        onChange={(e) => {
                                            const newTC = e.target.value;
                                            const oldTC = editData.threadCounts?.['500TC'] ? '500TC' : '300TC';
                                            const sub = editData.subCategory;
                                            const updatedMatrix = { ...editData.priceMatrix };

                                            if (updatedMatrix[oldTC]?.[sub] && !updatedMatrix[newTC]?.[sub]) {
                                                updatedMatrix[newTC] = { [sub]: JSON.parse(JSON.stringify(updatedMatrix[oldTC][sub])) };
                                            }

                                            setEditData({
                                                ...editData,
                                                threadCounts: { '300TC': newTC === '300TC', '500TC': newTC === '500TC' },
                                                priceMatrix: updatedMatrix
                                            });
                                        }}
                                    >
                                        <option value="300TC">Classic 300 TC</option>
                                        <option value="500TC">Premium 500 TC</option>
                                    </select>
                                </div>
                            )}

                            {editData.category === "Rashi" && (
                                <div className='col-span-2'>
                                    <label className='text-[10px] font-bold uppercase tracking-widest'>Celestial Rashi Alignment</label>
                                    <select 
                                        className='border p-2 w-full outline-none' 
                                        value={editData.rashi} 
                                        onChange={(e) => setEditData({...editData, rashi: e.target.value})}
                                        required
                                    >
                                        <option value="">Select Rashi</option>
                                        <option value="Aries">Aries (Mesh)</option>
                                        <option value="Taurus">Taurus (Vrishabh)</option>
                                        <option value="Gemini">Gemini (Mithun)</option>
                                        <option value="Cancer">Cancer (Kark)</option>
                                        <option value="Leo">Leo (Singh)</option>
                                        <option value="Virgo">Virgo (Kanya)</option>
                                        <option value="Libra">Libra (Tula)</option>
                                        <option value="Scorpio">Scorpio (Vrishchik)</option>
                                        <option value="Sagittarius">Sagittarius (Dhanu)</option>
                                        <option value="Capricorn">Capricorn (Makar)</option>
                                        <option value="Aquarius">Aquarius (Kumbh)</option>
                                        <option value="Pisces">Pisces (Meen)</option>
                                    </select>
                                </div>
                            )}

                            <textarea className='col-span-2 border p-2 h-32 outline-none' value={editData.description} onChange={e=>setEditData({...editData, description: e.target.value})} />
                        </div>

                        <div className='bg-stone-50 p-6 rounded border'>
                            <p className='mb-4 text-[10px] font-bold uppercase text-stone-500 tracking-widest'>Matrix Price Tuning (Sale / MRP)</p>
                            <div className='grid grid-cols-4 gap-4'>
                                {['SINGLE', 'DOUBLE', 'QUEEN', 'KING'].map(size => {
                                    const tcKey = editData.category === "Rashi" ? "Rashi" : (editData.threadCounts?.['500TC'] ? '500TC' : '300TC');
                                    return (
                                        <div key={size} className='space-y-2 bg-white p-4 border rounded shadow-sm'>
                                            <p className='font-bold text-[10px] text-stone-900 border-b pb-1'>{size}</p>
                                            <input type="number" className='w-full border p-1 text-xs outline-none' placeholder="Sale" 
                                                value={editData.priceMatrix?.[tcKey]?.[editData.subCategory]?.[size]?.sale || 0}
                                                onChange={(e) => onMatrixEdit(size, 'sale', e.target.value)} />
                                            <input type="number" className='w-full border p-1 text-xs outline-none' placeholder="MRP" 
                                                value={editData.priceMatrix?.[tcKey]?.[editData.subCategory]?.[size]?.original || 0}
                                                onChange={(e) => onMatrixEdit(size, 'original', e.target.value)} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <button type='submit' className='bg-stone-900 text-white py-4 font-bold uppercase tracking-[0.2em] transition-all hover:bg-black'>COMMIT UPDATES</button>
                    </form>
                </div>
            </div>
        )}
      </div>
    </LoadingSpinner>
  )
}
export default List