import { useLocation } from 'react-router-dom'
import * as queryString from 'query-string'
import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import Cookies from 'universal-cookie'
import './BrandSession.css'
import CloseIcon from '../../../assets/Close.svg'
import { AppContext } from '../../AppContext'
import { Modal } from '../agenda/Modal'
import { RelationContext } from './RelationContext'

function BrandSession(props) {
    const [isModalOpen, setModalState] = useState(false);
    const { hasRelation, postRelation } = useContext(RelationContext);
    const { userId } = useContext(AppContext);

    useEffect(() => {
        document.title = 'DFW Session'
    }, [])

    const location = useLocation()
    const params = queryString.parse(location.search)
    let videoId
    if (typeof params.videoId !== 'undefined') {
        videoId = params.videoId
    } else {
        videoId = ''
    }
    const videoUrl = `https://player.vimeo.com/video/${videoId}`
    const chatUrl = `https://vimeo.com/event/${videoId}/chat/`

    const handleClick = () => {
        setModalState(prevState => !prevState)
    }

    const handleClickToAction = () => {
        postRelation();
    }

    return (
        <div>
            <Modal open={isModalOpen}>
                <ModalBody
                    handleClick={handleClick}
                    handleClickToAction={handleClickToAction}
                />
            </Modal>
            <div style={{ width: '100%' }}>
                <img
                    width='471px'
                    src='https://digital-fashion-week.s3.eu-central-1.amazonaws.com/assets/dfw_logo.png'
                />
            </div>
            <div style={{ display: 'flex' }} className='vimeoWrapper'>
                <div
                    className='video'
                    style={{
                        //padding: '56.25% 0 0 0',
                        position: 'relative',
                        width: '80%',
                        flexGrow: 1,
                    }}
                >
                    <iframe
                        src={videoUrl}
                        allow='autoplay; fullscreen'
                        frameBorder='0'
                        allowFullScreen
                        style={{
                            position: 'relative',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                    ></iframe>
                </div>
                <div
                    className='chat'
                    style={{
                        width: '400px',
                        //padding: '56.25% 0 0 0',
                    }}
                >
                    <iframe src={chatUrl} width='400px' height='600' frameBorder='0'></iframe>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}>
                <RelationButton hasRelation={hasRelation} handleClick={handleClick} userId={userId}/>
            </div>
        </div>
    )
}

function readCookie() {
    const cookies = new Cookies()
    console.log(cookies.get('id')) // Pacman
    cookies.set('id', 'Pacman', { path: '/' })
}

function RelationButton({ hasRelation, handleClick, userId }) {
    console.log(userId)
    if (!userId) return null

    if (hasRelation) {
        return (
            <div>
                This brand already has your contact data
            </div>
        )
    }

    return (
        <button 
            onClick={handleClick}
            style={{ backgroundColor: 'salmon', border: 'none', padding: '10px', fontSize: '1.25em'}}
        >
            Allow the brand to have my contact data
        </button>
    )
}

function ModalBody({ handleClick, handleClickToAction }) {

    return (
        <>
            <div className='closeButton' onClick={handleClick}>
                <CloseIcon width='20px' height='20px' style={{ fill: '#93b0b9' }} />
            </div>
            <p>Are you sure you want to allow the brand to have your contact information?</p>
            <div style={{ display: 'flex' }}>
                <div className='callToAction' onClick={handleClickToAction}>
                    Yes
                </div>
                <div className='callToAction' onClick={handleClick}>
                    No
                </div>
            </div>
        </>
    );
}

export { BrandSession }
