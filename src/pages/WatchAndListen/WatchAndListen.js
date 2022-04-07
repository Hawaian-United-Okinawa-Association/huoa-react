import Accordion from "components/Accordion/Accordion";
import Layout from "components/Layout/Layout";
import React from "react";
import { ReactComponent as YouTube } from '../../assets/youtube.svg'

const WatchAndListen = ({ data }) => {
    if (!data) return null;
    else {
        return (
            <Layout>
                <div className="watch__container">
                    <h2 position="left" className="watch_and_listen__title">{data.title}</h2>
                    <h4>Hawaii United Okinawa Association Youtube</h4>
                    <iframe
                        src="https://www.youtube.com/embed/AHpM6KMMOMY"
                        frameborder="0"
                        width="75%"
                        height="400"
                        allow="accelerometer; autoplay; picture-in-picture"
                        allowFullScreen
                        title="video"
                    />
                     <div>
                        <a
                            style={{width: '50%', marginTop: 15, marginBottom: 15}}
                            className="club__link"
                            href={data.watch_and_listen_page.huoa_youtube_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                            <p>VIEW HUOA YOUTUBE CHANNEL</p>
                            </div>
                            <YouTube />
                        </a>
                    </div>
                    <div className="watch__body">
                        <Accordion panels={data.watch_and_listen_page.watch_and_listen_list}/>
                    </div>
                </div>
            </Layout>
        )
    };
};

export default WatchAndListen;