import React, { useState } from 'react';

function Shop() {
  // State to manage whether the pop-up is visible or not
  const [showPopup, setShowPopup] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState('');

  // Function to toggle pop-up visibility and set image source for the pop-up
  const togglePopup = (imageSrc) => {
    setPopupImageSrc(imageSrc);
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <h1 className='container'>Shopping Mall</h1>
      <div className="container text-center">
        <div className="row m-3">
          <div className="col">
            <img 
              src='https://www.usatoday.com/gcdn/-mm-/800d7898a25e1ca6ef150bdb9acd960f53fcf4a7/c=123-0-2003-1413/local/-/media/USATODAY/USATODAY/2014/06/18/1403113874000-458713385.jpg'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://www.usatoday.com/gcdn/-mm-/800d7898a25e1ca6ef150bdb9acd960f53fcf4a7/c=123-0-2003-1413/local/-/media/USATODAY/USATODAY/2014/06/18/1403113874000-458713385.jpg')}
            />
          </div>
          <div className="col">
            <img 
              src='https://images.ctfassets.net/biom0eqyyi6b/72XK9eigsoA8yIeAIGSKy4/cc8960f817856d07b0b574bf04c6367a/hero_fashionandtravel.webp'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://images.ctfassets.net/biom0eqyyi6b/72XK9eigsoA8yIeAIGSKy4/cc8960f817856d07b0b574bf04c6367a/hero_fashionandtravel.webp')}
            />
          </div>
          <div className="col">
            <img 
              src='https://i.pinimg.com/originals/1b/12/6a/1b126a4f0a7884a0aa4c06e498108c30.jpg'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://i.pinimg.com/originals/1b/12/6a/1b126a4f0a7884a0aa4c06e498108c30.jpg')}
            />
          </div>
          <div className="col">
            <img 
              src='https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/cbce/3011/b83b/47f7/6d2b/7321/be32/4eca/20d4/3386/3386.jpg'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/cbce/3011/b83b/47f7/6d2b/7321/be32/4eca/20d4/3386/3386.jpg')}
            />
          </div>
        </div>
        <div className="row m-3">
          <div className="col">
            <img 
              src='https://www.narcity.com/media-library/image.jpg?id=25923035&width=1245&height=700&coordinates=0%2C0%2C0%2C0'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://www.narcity.com/media-library/image.jpg?id=25923035&width=1245&height=700&coordinates=0%2C0%2C0%2C0')}
            />
          </div>
          <div className="col">
            <img 
              src='https://sterncentersindelfingen.de/wp-content/uploads/sites/5/2021/07/pop_up_image_sterncenter.png'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://sterncentersindelfingen.de/wp-content/uploads/sites/5/2021/07/pop_up_image_sterncenter.png')}
            />
          </div>
          <div className="col">
            <img 
              src='https://dailytings.com/wp-content/uploads/2018/02/dieter-de-vroomen-452887-unsplash.png'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://dailytings.com/wp-content/uploads/2018/02/dieter-de-vroomen-452887-unsplash.png')}
            />
          </div>
          <div className="col">
            <img 
              src='https://images.robertharding.com/zoom/RM/RH/HORIZONTAL/832-353014.jpg'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://images.robertharding.com/zoom/RM/RH/HORIZONTAL/832-353014.jpg')}
            />
          </div>
        </div>

        <div className="row m-3">
          <div className="col">
            <img 
              src='https://brazilianwave.org/wp-content/uploads/2015/12/Edmonton.jpg'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://brazilianwave.org/wp-content/uploads/2015/12/Edmonton.jpg')}
            />
          </div>
          <div className="col">
            <img 
              src='https://mdz-moskau.eu/wp-content/uploads/2016/09/DSC_7870.jpg'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://mdz-moskau.eu/wp-content/uploads/2016/09/DSC_7870.jpg')}
            />
          </div>
          <div className="col">
            <img 
              src='https://us.123rf.com/450wm/tea/tea1601/tea160103319/51053134-kuala-lumpur-malaysia-april-23-2014-suria-klcc-shopping-mall-in-petronas-twin-towers-suria-klcc-is.jpg?ver=6'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://us.123rf.com/450wm/tea/tea1601/tea160103319/51053134-kuala-lumpur-malaysia-april-23-2014-suria-klcc-shopping-mall-in-petronas-twin-towers-suria-klcc-is.jpg?ver=6')}
            />
          </div>
          <div className="col">
            <img 
              src='https://us.123rf.com/450wm/romanzaiets/romanzaiets2301/romanzaiets230100078/197089496-kuala-lumpur-malaysia-december-04-2022-klcc-the-shopping-mall.jpg?ver=6'
              style={{ width: '15rem',height: '15rem', objectFit: 'cover', cursor: 'pointer'  }}
              onClick={() => togglePopup('https://us.123rf.com/450wm/romanzaiets/romanzaiets2301/romanzaiets230100078/197089496-kuala-lumpur-malaysia-december-04-2022-klcc-the-shopping-mall.jpg?ver=6')}
            />
          </div>
        </div>

      </div>
      
      {/* Pop-up section */}
      {showPopup && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => setShowPopup(false)} // Close pop-up when clicked outside
        >
          <img src={popupImageSrc} alt="Pop-up" style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
    </div>
  );
}

export default Shop;
