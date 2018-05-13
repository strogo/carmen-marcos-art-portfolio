import React, { Component } from 'react'

class ExhibitionAnnouncement extends Component {

    render() {
        return (
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-success">Exhibition</strong>
                            <h4 className="mb-0">Bild Wein Schau</h4>
                            <div className="mb-1 text-muted">Saturday, May 26th @ 14:00</div>
                            <a href="https://www.google.at/maps/place/Sterngasse+5,+2074+Unterretzbach/@48.7676147,16.0036343,182m/data=!3m1!1e3!4m5!3m4!1s0x476d57a8cc7ea4b1:0xa63dbbb925122f61!8m2!3d48.7676194!4d16.0040441">Sterngasse 5, 2074 Unterretzbach</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-md-block" src="http://cms.casadelhuerto.com/api/v1/carmen-marcos-art/nodes/29a1108e631147d3a1108e6311c7d378/binary/image?w=225&h=150&crop=fp" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-success">Exhibition</strong>
                            <h4 className="mb-0">Galerie Sandpeck</h4>
                            <div className="mb-1 text-muted">Sunday, July 8th @ 14:00</div>
                            <a href="https://www.google.com/maps/place/Florianigasse+75,+1080+Wien/@48.2119839,16.3387722,834m/data=!3m1!1e3!4m5!3m4!1s0x476d07e8fe6d8a01:0xe7159d49d3f1077!8m2!3d48.2119839!4d16.3409609">Florianigasse 75, 1080 Wien

</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-md-block" src="http://cms.casadelhuerto.com/api/v1/carmen-marcos-art/nodes/99a57a95f7e84ebba57a95f7e8eebbd2/binary/image?w=225&h=150&crop=fp" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ExhibitionAnnouncement