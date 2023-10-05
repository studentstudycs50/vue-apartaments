<template>
    <div class="orders-item">
        <img class="orders-item__img" :src="order.imgUrl" alt="photo">
        <div class="orders-item__description">
            <div class="orders-item__text">
                <h2 class="orders-item__title">{{ order.title }}</h2>
                <p class="orders-item__location">{{ order.location.city }}</p>
            </div>
            <div class="orders-item__cost">
                <span class="orders-item__price">UAH {{ order.price }}</span>per night
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrdersItem',
        props: {
            order: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.orders-item {
  display: flex;
  margin-bottom: 20px;

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__img {
    display: block;
    height: 190px;
    object-fit: cover;
    margin-right: 20px;
    width: 45%;
  }

  &__details {
    border: 2px solid #e1efff;
    border-left: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 55%;
  }

  &__price {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>