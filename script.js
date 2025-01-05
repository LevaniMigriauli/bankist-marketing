'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
const section2 = document.querySelector('#section--2')
const section3 = document.querySelector('#section--3')
const sections = [section1, section2, section3]

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})

///////////////////////////////////////
// Page navigation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()
  const element = e.target

  console.log(element)

  if (element.classList.contains('nav__link')) {
    const id = element.getAttribute('href')
    console.log(id)
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    })
  }
})

///////////////////////////////////////
// Tabbed component

const operationContents = Array.from(
  document.querySelectorAll('.operations__content'))

const operationsTabContainer = document.querySelector(
  '.operations__tab-container')

operationsTabContainer.addEventListener('click', function (e) {
  const clickedBtn = e.target.closest('.operations__tab')
  if (![...clickedBtn.classList].includes('operations__tab--active') &&
    [...clickedBtn.classList].includes('operations__tab')) {
    const currentTabNumber = clickedBtn.getAttribute('data-tab')
    console.log(currentTabNumber)

    Array.from(operationsTabContainer.children).
      forEach(function (tab, i) {
        if ([...tab.classList].includes('operations__tab--active')) {
          tab.classList.remove('operations__tab--active')
          operationContents[i].classList.remove(
            'operations__content--active')
        }
      })

    clickedBtn.classList.add('operations__tab--active')
    operationContents[currentTabNumber - 1].classList.add(
      'operations__content--active')
  }
})

