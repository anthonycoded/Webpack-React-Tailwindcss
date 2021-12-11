import React from "react";

const StepTwo = ({ handleFormChange, user }) => {
  return (
    <div className="py-8">
      <p className="font-bold text-primary-main text-xl">Personal Info</p>
      <p>
        Elit aliqua sint eu qui minim quis nostrud ex est mollit sunt veniam
        consequat. Officia qui sint dolore laboris veniam ea. In velit pariatur
      </p>
      <div className="space-y-2 pt-12">
        <div className="flex flex-row items-center space-x-4">
          <input
            className="w-full h-12 border-b-2 border-inActive"
            required
            name="firstName"
            autoComplete="given-name"
            value={user.firstName}
            onChange={handleFormChange}
            placeholder="First name"
          />

          <input
            className="w-full h-12 border-b-2 border-inActive"
            required
            name="lastName"
            label="Last name"
            value={user.lastName}
            fullWidth
            autoComplete="family-name"
            onChange={handleFormChange}
            placeholder="Last name"
          />
        </div>
        <div className="flex flex-col items-center ">
          <input
            className="w-full h-12 border-b-2 border-inActive"
            type="text"
            onChange={handleFormChange}
            value={user.address1}
            placeholder="Adress"
          />

          <input
            className="w-full h-12 border-b-2 border-inActive"
            name="address2"
            placeholder="Address line 2"
            value={user.address2}
            autoComplete="shipping address-line2"
            onChange={handleFormChange}
          />
          <input
            className="w-full h-12 border-b-2 border-inActive"
            value={user.city}
            placeholder="City"
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={handleFormChange}
          />
        </div>
        <div className="flex flex-row items-center space-x-4">
          <input
            className="border-b-2 border-inActive w-full h-12"
            placeholder="State"
            value={user.state}
            id="state"
            name="state"
            label="State"
            onChange={handleFormChange}
            fullWidth
          />

          <input
            className="border-b-2 border-inActive w-full h-12"
            placeholder="ZipCode"
            value={user.zip}
            required
            id="zip"
            name="zip"
            label="Zip"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={handleFormChange}
          />
        </div>
        <div>
          <input
            className="border-b-2 border-inActive w-full h-12"
            placeholder="Email"
            required
            value={user.email}
            name="email"
            autoComplete="email"
            onChange={handleFormChange}
          />

          <input
            className="border-b-2 border-inActive w-full h-12"
            placeholder="Phone Number"
            value={user.phone}
            id="home-phone"
            name="homePhone"
            label="Home Phone"
            fullWidth
            autoComplete="home-phone"
            onChange={handleFormChange}
          />

          <input
            className="border-b-2 border-inActive w-full h-12"
            placeholder="Birthday"
            value={user.birthday}
            id="date"
            type="date"
            name="birthday"
            onChange={handleFormChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
