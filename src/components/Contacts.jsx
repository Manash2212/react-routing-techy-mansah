import React from 'react'

function Contacts() {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder="Full Name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" required placeholder="abc@xyz.com" />
                </div>
                <div>
                    <label>Massage</label>
                    <textarea  cols="30" rows="5" placeholder="Tell us about your quary.."></textarea>
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contacts