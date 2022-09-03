const SponsorCart = function ({cartData}) {
  return (
    <section className="container mx-auto mt-6">
      <div className="py-8 px-6 text-white mb-10   rounded-xl profile-bg w-full">
        <h3 className="font-normal text-lg">
          {" "}
          Sponsor Cart ({cartData.length})
        </h3>
      </div>
    </section>
  );
};

export default SponsorCart;
