import Empty from '@/app/components/pages/account/orders/Empty';

const page = () => {
  return (
    <div className="space-y-5 text-sm sm:text-base lg:leading-6">
      <p className="lg:leading-6">Effective Date: March 28, 2024</p>
      <p className="lg:leading-6">
        At Dave&apos;s Auto Center, we strive to ensure your satisfaction with
        our products and services. If you are not completely satisfied with your
        purchase, we offer the following return policy:
      </p>
      <h5 className="font-bold">Returns and Exchanges:</h5>
      <ul className=" list-decimal pl-5">
        <li>
          Parts and Accessories:
          <ul className="list-disc pl-5">
            <li>
              Unused, uninstalled parts and accessories may be returned within
              [insert number] days from the date of purchase for a refund or
              exchange, subject to the following conditions:
              <ul className="list-disc pl-5">
                <li>
                  The item must be in its original packaging and in new,
                  resalable condition.
                </li>
                <li>
                  Proof of purchase is required, such as a receipt or order
                  confirmation.
                </li>
                <li>Certain items may be subject to a restocking fee.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Services:{' '}
          <ul className="list-disc pl-5">
            <li>
              We stand behind the quality of our automotive services. If you are
              dissatisfied with the service provided, please contact us within
              [insert number] days of the service date to discuss your concerns
              and potential resolutions.
            </li>
          </ul>
        </li>
      </ul>
      <h5 className="font-bold">How to Initiate a Return or Exchange:</h5>
      <p className="lg:leading-6">
        To initiate a return or exchange, please follow these steps:
      </p>
      <ul className="list-decimal pl-5">
        <li>
          Contact our customer service team at [insert contact information] to
          obtain a Return Authorization (RA) number.
        </li>
        <li>
          Package the item securely, including all original packaging and
          documentation.
        </li>
        <li>Clearly mark the RA number on the outside of the package.</li>
        <li>
          Ship the item to the address provided by our customer service team.
        </li>
      </ul>
      <h5 className="font-bold">Refunds:</h5>
      <p className="lg:leading-6">
        Refunds will be processed within [insert number] business days of
        receiving the returned item. Refunds will be issued to the original form
        of payment used for the purchase.
      </p>
      <h5 className="font-bold">Exceptions:</h5>
      <p className="lg:leading-6">
        Please note the following exceptions to our return policy:
      </p>
      <ul className="list-disc pl-5">
        <li>
          Custom or special order items may not be eligible for return or
          exchange unless they are defective or damaged.
        </li>
        <li>
          Services rendered, such as labor charges for automotive repairs, are
          non-refundable unless otherwise specified.
        </li>
      </ul>
      <h5 className="font-bold">Damaged or Defective Items:</h5>
      <p className="lg:leading-6">
        If you receive a damaged or defective item, please contact us
        immediately for assistance. We will work with you to arrange for a
        replacement or refund, depending on the circumstances.
      </p>
      <h5 className="font-bold">Contact Us:</h5>
      <p className="lg:leading-6">
        If you have any questions or concerns about our return policy, please
        contact us at [insert contact information]. Our customer service team is
        here to assist you and ensure your satisfaction.
      </p>
      <p className="lg:leading-6">
        By making a purchase from Dave&apos;s Auto Center, you agree to abide by
        the terms of this return policy. We reserve the right to modify or
        update this policy at any time without prior notice.
      </p>
    </div>
  );
};

export default page;
