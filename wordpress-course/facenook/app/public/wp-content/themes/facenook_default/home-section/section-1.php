<?php
$pageId = get_the_ID();
$header = get_post_meta($pageId, 'section_1_header', true);
$description = get_post_meta($pageId, 'section_1_description', true);
$firstImageSource = get_post_meta($pageId, 'section_1_image1', true);
$secondImageSource = get_post_meta($pageId, 'section_1_image2', true);
$thirdImageSource = get_post_meta($pageId, 'section_1_image3', true);


?>


<div class="section section--lead container ">
    <div class="section__container section--lead__container">

        <div class="image-container row mb-10">
            <picture class=" image-container__image image-container__image--1 col-12 col-md-5">
                <img src="<?php echo $firstImageSource ?>">
            </picture>
            <picture class="d-none d-md-block image-container__image image-container__image--2 col-7">
                <img src="<?php  echo $secondImageSource?>">
            </picture>

        </div>

        <div class="row article article--hero-index">


            <div class="col-12 col-xl-8">
                <div class="wrapper article__content p-6 p-md-10 p-xl-20">
                    <h2 class="article__content__heading mb-4"><?php echo $header ?></h2>
                    <p class="article__content__paragraph mb-10 body-xl"> <?php echo $description ?></p>
                    <a href="#" class="d-none d-md-inline-block article__cta button  ">Contact Us <i class="icon-arrow-e"></i></a>
                </div>
            </div>

            <div class="article__image d-none d-xl-block col-xl-4 ">

                <div class=" article__image__frame article__image__frame--1 ">
                    <img src="<?php echo $thirdImageSource ?>">
                </div>

            </div>
        </div>
    </div>
</div>