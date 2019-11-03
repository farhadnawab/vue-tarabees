<template>
  <main class="site-main not-found dark-bg">
        <section class="error-404 p-relative ov-hidden">
				<div class="container">
					<div class="row align-center">
						<div class="col-12">
							<div class="error-message-404 text-center">
								<img src="@/assets/img/404.png" class="mb-15" alt="404">
								<h2 class="text-uppercase fw-700 mb-20 text-white">Ooops!</h2>
								<h5 class="text-uppercase fw-700 mb-20">The page you are looking for is not found.</h5>
								<p class="mb-45">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do <br class="d-none d-sm-block"> eiusmod lorem ipsum dolor sit amet.</p>
								<router-link to="/" class="btn btn-theme">Back to Home</router-link>
							</div>
						</div> <!-- end .col-12 -->
					</div> <!-- end .row -->
				</div> <!-- end .container -->
				<div class="watermark-title">404</div>
			</section> <!-- end .error-404 -->

		</main> <!-- end .site-main -->
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

