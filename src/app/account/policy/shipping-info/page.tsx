const page = () => {
  return (
    <div className="space-y-5 text-sm sm:text-base lg:leading-6">
      <p className="lg:leading-6">Effective Date: March 28, 2024</p>
      <p className="lg:leading-6">
        Thank you for choosing Dave&apos;s Auto Center for your automotive
        needs. To provide you with the best shipping experience possible, we
        offer the following shipping information:
      </p>
      <h5 className="font-bold">Shipping Methods:</h5>
      <ul className=" list-decimal pl-5">
        <li>
          Standard Shipping:
          <ul className="list-disc pl-5">
            <li>
              Orders shipped via standard shipping typically arrive within
              [insert number] business days from the date of shipment.
            </li>
          </ul>
        </li>
        <li>
          Expedited Shipping:
          <ul className="list-disc pl-5">
            <li>
              For faster delivery, expedited shipping options are available at
              an additional cost. Orders shipped via expedited shipping
              typically arrive within [insert number] business days from the
              date of shipment.
            </li>
          </ul>
        </li>
      </ul>
      <h5 className="font-bold">Shipping Rates:</h5>
      <p className="lg:leading-6">
        Shipping rates are calculated based on the weight of your order,
        shipping method selected, and destination address. You will be able to
        view the shipping costs for your order during the checkout process
        before completing your purchase.
      </p>
      <h5 className="font-bold">Order Processing Time:</h5>
      <p className="lg:leading-6">
        Orders are typically processed and shipped within [insert number]
        business days from the date of purchase, excluding weekends and
        holidays. Orders placed after [insert time] will be processed on the
        following business day.
      </p>
      <h5 className="font-bold">Order Tracking:</h5>
      <p className="lg:leading-6">
        Once your order has shipped, you will receive a shipping confirmation
        email containing tracking information. You can use this tracking number
        to monitor the status of your shipment and estimate the delivery date.
      </p>
      <h5 className="font-bold">Shipping Restrictions:</h5>
      <p className="lg:leading-6">
        Please note the following shipping restrictions:
      </p>
      <ul className="list-disc pl-5">
        <li>We currently only ship within [insert country/region].</li>
        <li>
          Some items may be subject to shipping restrictions due to size,
          weight, or other factors.
        </li>
        <li>
          Certain hazardous materials may be restricted from air shipping and
          can only be shipped via ground transportation.
        </li>
      </ul>
      <h5 className="font-bold">Shipping Address:</h5>
      <p className="lg:leading-6">
        Please ensure that your shipping address is accurate and complete to
        avoid delays or delivery issues. We are not responsible for orders
        shipped to incorrect or incomplete addresses provided by the customer.
      </p>
      <h5 className="font-bold">Contact Us:</h5>
      <p className="lg:leading-6">
        If you have any questions or concerns about shipping, please contact our
        customer service team at [insert contact information]. We&apos;re here
        to assist you and ensure a smooth shipping experience.
      </p>
      <p className="lg:leading-6">
        By placing an order with Dave&apos;s Auto Center, you agree to abide by
        the terms of our shipping policy. We reserve the right to modify or
        update this policy at any time without prior notice.
      </p>
    </div>
  );
};

export default page;
