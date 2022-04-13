import Accordion from "components/Accordion/Accordion";
import Container from "components/Container/Container";
import Layout from "components/Layout/Layout";
import React from "react";
import { ReactComponent as YouTube } from '../../assets/youtube.svg'

const WatchAndListen = ({ data }) => {
    if (!data) return null;
    else {
        return (
            <Layout>
                <Container>
                    <div>
                        <h2 position="left">{data.title}</h2>
                        <div className="watch__subHeader">Hawaii United Okinawa Association Youtube</div>
                        <iframe
                            src="https://www.youtube.com/embed/AHpM6KMMOMY"
                            frameborder="0"
                            allow="accelerometer; autoplay; picture-in-picture"
                            allowFullScreen
                            className="watch__frame"
                        />
                        <div>
                            <a
                                className="watch__link"
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
                </Container>
            </Layout>
        )
    };
};

export default WatchAndListen;