<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Terms & Conditions:
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="lead">If this were a real app, you would agree ...</div>
          <br />
          <section id="define-user">
            <h5>The User:</h5>
            <p>
              The user is defined as you, a person. We will not make you
              identify all of the traffic lights in order to prove this ...
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis explicabo rerum placeat. Minima dolor iusto explicabo
              repudiandae asperiores unde quod numquam possimus facilis eius!
              Dolor ipsa deserunt excepturi voluptatum error ipsam autem quo
              velit magnam quia inventore similique veniam, eius repellat fuga.
              Sit nesciunt impedit fuga. Pariatur nesciunt libero eaque, eos
              provident itaque necessitatibus obcaecati alias quae reprehenderit
              perferendis culpa doloribus similique optio ex asperiores
              temporibus odit, maxime voluptatum aliquam excepturi soluta sint
              labore. Eveniet eaque reprehenderit cumque maiores perspiciatis,
              in expedita debitis repudiandae, doloremque consequatur ipsa
              molestiae alias suscipit provident vitae? Iure dicta labore
              aspernatur quam ipsa earum corporis!
            </p>
          </section>
          <section id="define-provider">
            <h5>The Provider:</h5>
            <p>The provider is defined as a well-intentioned conglomerate.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis explicabo rerum placeat. Minima dolor iusto explicabo
              repudiandae asperiores unde quod numquam possimus facilis eius!
              Dolor ipsa deserunt excepturi voluptatum error ipsam autem quo
              velit magnam quia inventore similique veniam, eius repellat fuga.
              Sit nesciunt impedit fuga. Pariatur nesciunt libero eaque, eos
              provident itaque necessitatibus obcaecati alias quae reprehenderit
              perferendis culpa doloribus similique optio ex asperiores
              temporibus odit, maxime voluptatum aliquam excepturi soluta sint
              labore. Eveniet eaque reprehenderit cumque maiores perspiciatis,
              in expedita debitis repudiandae, doloremque consequatur ipsa
              molestiae alias suscipit provident vitae? Iure dicta labore
              aspernatur quam ipsa earum corporis!
            </p>
          </section>
          <section id="define-provider">
            <h5>The Service:</h5>
            <p>
              The service is defined as something awesome, and you pinky-swear
              not to steal it.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis explicabo rerum placeat. Minima dolor iusto explicabo
              repudiandae asperiores unde quod numquam possimus facilis eius!
              Dolor ipsa deserunt excepturi voluptatum error ipsam autem quo
              velit magnam quia inventore similique veniam, eius repellat fuga.
              Sit nesciunt impedit fuga. Pariatur nesciunt libero eaque, eos
              provident itaque necessitatibus obcaecati alias quae reprehenderit
              perferendis culpa doloribus similique optio ex asperiores
              temporibus odit, maxime voluptatum aliquam excepturi soluta sint
              labore. Eveniet eaque reprehenderit cumque maiores perspiciatis,
              in expedita debitis repudiandae, doloremque consequatur ipsa
              molestiae alias suscipit provident vitae? Iure dicta labore
              aspernatur quam ipsa earum corporis!
            </p>
          </section>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            id="accept-terms-modal"
            class="btn btn-primary"
            @click="consent"
            data-bs-dismiss="modal"
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TermsModal",
  props: ["termsModalHeader", "termsModalText"],

  methods: {
    consent() {
      // console.log("Consent was given via the Modal");
      this.$emit("termsAccepted");
    },
  },
};
</script>

<style scoped></style>
