const MovieDetails = ({ selectedMovie }) => {
    return <div id="movie-details-modal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          
          <div className="modal-header">
            <h5 className="modal-title">
              {selectedMovie?.title}
            </h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
  
          <div className="modal-body text-center">
            <h5>{selectedMovie?.details}</h5>
            <p>{selectedMovie?.desc}</p>
          </div>
  
        </div>
      </div>
    </div>
  };
  
  export default MovieDetails;