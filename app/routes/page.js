const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Major, User, Class } = require('../models');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  // res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  // res.locals.followingCount = req.user ? req.user.Followings.length : 0;
  // res.locals.followerIdList = req.user ? req.user.Followings.map(f => f.id) : [];

  next();
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird' });
});

router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
});

router.get('/', async (req, res, next) => {
  try {
    // const posts = await Post.findAll({
    //   include: {
    //     model: User,
    //     attributes: ['id', 'nick'],
    //   },
    //   order: [['createdAt', 'DESC']],
    // });
    const courses = await Class.findAll();
    res.render('main', {
      title: 'NodeBird',
      // twits: posts,
      allcourse: courses,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/allClass', async(req, res, next) => {
  try {
    // let courses = [];
    // courses = await Class.findAll();
    res.render('/wa',{
      // allcourse: courses,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/hashtag', async (req, res, next) => {
  // const query = req.query.hashtag;
  const query = 0;
  if (!query) {
    return res.redirect('/');
  }
  try {
    // const hashtag = await Hashtag.findOne({ where: { title: query } });
    // let posts = [];
    // if (hashtag) {
    //   posts = await hashtag.getPosts({ include: [{ model: User }] });
    // }

    return res.render('main', {
      title: `${query} | NodeBird`,
      // twits: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
