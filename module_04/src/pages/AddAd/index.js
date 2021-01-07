import React, { useEffect, useRef, useState } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents.js';
import { useApi } from '../../helpers/OlzAPI';
import { PageArea } from './styled.js';

export default function AddAd() {

    const api = useApi();

    const fileField = useRef();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const getCategories = async () => {
            const categoriesFromAPI = await api.getCategories();
            setCategories(categoriesFromAPI);
        }
        getCategories();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('')

        /*
        const json = await api.login(email, password);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, keepPassword);
            window.location.href = '/';
        }
        */
        setDisabled(false);
    }

    const priceMask = createNumberMask({
        prefix: "R$ ",
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: ".",
        allowDecimal: true,
        decimalSymbol: ","
    })

    return (
        <PageContainer>
            <PageTitle>Add an Ad</PageTitle>
            <PageArea>

                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">Title</div>
                        <div className="area-input">
                            <input
                                type="text"
                                disabled={disabled}
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Category</div>
                        <div className="area-input">
                            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                                <option></option>
                                {categories.map(cat =>
                                    <option key={cat._id} value={cat.name}>{cat.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Price</div>
                        <div className="area-input">
                            <MaskedInput
                                mask={priceMask}
                                placeholder="R$ "
                                disabled={disabled || priceNegotiable}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Price Negotiable</div>
                        <div className="area-input">
                            <input
                                className="price-negotiable-checkbox"
                                type="checkbox"
                                disabled={disabled}
                                checked={priceNegotiable}
                                onChange={() => { setPriceNegotiable(!priceNegotiable) }}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Description</div>
                        <div className="area-input">
                            <textarea
                                disabled={disabled}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}>
                            </textarea>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Images</div>
                        <div className="area-input">
                            <input
                                type="file"
                                disabled={disabled}
                                ref={fileField}
                                multiple
                            ></input>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button disabled={disabled}>Post your Ad</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}