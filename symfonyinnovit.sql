-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le : Jeu 17 Avril 2014 à 20:29
-- Version du serveur: 5.5.20
-- Version de PHP: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `symfonyinnovit`
--

-- --------------------------------------------------------

--
-- Structure de la table `articl`
--

CREATE TABLE IF NOT EXISTS `articl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contenu` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `auteur` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `titre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

CREATE TABLE IF NOT EXISTS `cours` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_matiere` int(11) NOT NULL,
  `titre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=623 ;

--
-- Contenu de la table `cours`
--

INSERT INTO `cours` (`id`, `id_matiere`, `titre`) VALUES
(31, 2, 'الأعداد الصحيحة الطبيعية'),
(32, 2, 'الأعداد العشرية'),
(33, 2, 'جمع الأعداد الطبيعية و العشرية'),
(34, 2, 'النسبة المئوية'),
(35, 2, 'المساحات'),
(36, 2, 'وحدات قياس الأطوال'),
(37, 4, 'Les types de phrases(1)'),
(38, 4, 'Le présent des verbes être, avoir et des verbes du premier groupe'),
(39, 4, 'Le passé récent'),
(131, 2, 'الأعداد الصحيحة الطبيعية'),
(132, 2, 'الأعداد العشرية'),
(133, 2, 'جمع الأعداد الطبيعية و العشرية'),
(134, 2, 'النسبة المئوية'),
(135, 2, 'المساحات'),
(136, 2, 'وحدات قياس الأطوال'),
(137, 4, 'Les types de phrases(1)'),
(138, 4, 'Le présent des verbes être, avoir et des verbes du premier groupe'),
(139, 4, 'Le passé récent'),
(310, 4, 'Le groupe nominal sujet (GNS)'),
(311, 4, 'Le futur proche'),
(312, 4, 'le pluriel des noms en -ail et en -al'),
(313, 3, 'الكهرباء'),
(314, 3, 'التربة'),
(315, 3, 'الطاقة'),
(316, 3, 'الضغط'),
(317, 3, 'الفلك'),
(318, 1, 'الفعل اللازم و الفعل المتعدي'),
(319, 1, 'الفعل المعتل و المثال'),
(320, 1, 'النواسخ الفعلية و الحرفية'),
(321, 1, 'المفعول المطلق و المفعول لأجله'),
(322, 1, 'الهمزة المتوسطة'),
(370, 4, 'Le groupe nominal sujet (GNS)'),
(611, 4, 'Le futur proche'),
(612, 4, 'le pluriel des noms en -ail et en -al'),
(613, 3, 'الكهرباء'),
(614, 3, 'التربة'),
(615, 3, 'الطاقة'),
(616, 3, 'الضغط'),
(617, 3, 'الفلك'),
(618, 1, 'الفعل اللازم و الفعل المتعدي'),
(619, 1, 'الفعل المعتل و المثال'),
(620, 1, 'النواسخ الفعلية و الحرفية'),
(621, 1, 'المفعول المطلق و المفعول لأجله'),
(622, 1, 'الهمزة المتوسطة');

-- --------------------------------------------------------

--
-- Structure de la table `enseignant`
--

CREATE TABLE IF NOT EXISTS `enseignant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_eleve` int(11) NOT NULL,
  `id_prof` int(11) NOT NULL,
  `etat` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=12 ;

--
-- Contenu de la table `enseignant`
--

INSERT INTO `enseignant` (`id`, `id_eleve`, `id_prof`, `etat`) VALUES
(1, 1, 2, 1),
(11, 1, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `etat_cours`
--

CREATE TABLE IF NOT EXISTS `etat_cours` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_cours` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `etat` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE IF NOT EXISTS `etudiant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_insc` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `evolution`
--

CREATE TABLE IF NOT EXISTS `evolution` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_mat` int(11) NOT NULL,
  `note` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `khadim`
--

CREATE TABLE IF NOT EXISTS `khadim` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

CREATE TABLE IF NOT EXISTS `matiere` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Contenu de la table `matiere`
--

INSERT INTO `matiere` (`id`, `nom`) VALUES
(1, 'التاريخ'),
(2, 'الرياضيات'),
(3, 'علوم الحياة والارض'),
(4, 'الفيزياء و الكيمياء');

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_dest` int(11) NOT NULL,
  `id_exp` int(11) NOT NULL,
  `date_envoi` date NOT NULL,
  `objet` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `contenu` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

--
-- Contenu de la table `message`
--

INSERT INTO `message` (`id`, `id_dest`, `id_exp`, `date_envoi`, `objet`, `contenu`) VALUES
(1, 1, 1, '2014-03-04', 'test', 'hey ! ca marche ?'),
(2, 1, 2, '2014-03-18', 'coucou', 'c''est moi encore !'),
(3, 1, 2, '2014-03-20', 'hou hou', 'holaaaaa'),
(4, 2, 1, '2014-03-20', 'hohhohoh hou', 'holaaaa zdzdzda'),
(5, 1, 1, '2014-03-27', 'dzdzdz', 'zdzdzdz\r\n'),
(6, 1, 1, '2014-03-28', 'ssas', 'hjjjjjjjjjjjj bhlggggggggggg'),
(7, 1, 1, '2014-03-28', 'faazfafa', 'bonjour'),
(8, 1, 1, '2014-03-29', 'ssas', 'test   apre s integration'),
(9, 1, 1, '2014-03-29', 'zdzz', 'zddzdzdzd');

-- --------------------------------------------------------

--
-- Structure de la table `niveau`
--

CREATE TABLE IF NOT EXISTS `niveau` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classe` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ecole` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ville` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `niveau_user`
--

CREATE TABLE IF NOT EXISTS `niveau_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_niveau` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `professeur`
--

CREATE TABLE IF NOT EXISTS `professeur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_insc` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE IF NOT EXISTS `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_cours` int(11) NOT NULL,
  `question` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rep1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rep2` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rep3` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rep4` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rep` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `explications` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=191 ;

--
-- Contenu de la table `question`
--

INSERT INTO `question` (`id`, `id_cours`, `question`, `rep1`, `rep2`, `rep3`, `rep4`, `rep`, `explications`) VALUES
(124, 1, 'حدد رتبة الرقم 5 في العدد التالي 2.700.050.200', 'عشرات الآلاف', 'وحدات الملايين', 'عشرات الملايين', 'مئة الآلاف', 'عشرات الآلاف', ''),
(125, 1, 'ما هي الكتابة الرقمية الصحيحة للعدد التالي : ثلاثة ملايين و ستمئة وخمسة و سبعون ألفا و أربعون', '3.675.040', '30.675.040', '3.765.400', '3.456.300', '3.675.040', ''),
(126, 1, 'ماهي الكتابة التأطيرية الصحيحة للعدد 1654', '1000 < 1645< 1800', '2000 < 1645 < 2666', '1640 < 1645 < 1300', '1644 < 1645 <1643', '1000 < 1645< 1800', ''),
(127, 2, 'ستة أجزآء من الألف هي', '0.006', '0.0006', '0.6', '0.06', '0.006', ''),
(128, 2, 'ثلاثة وحدات و خمسة أعشار  هي', '3.5', '3.05', '35', '0.35', '3.5', ''),
(129, 2, 'ماهو العدد الذي قيمته المقربة بإفراط إلى 0.1 هي 19.6', '19.5', '19.7', '19.4', '19.61', '19.5', ''),
(130, 3, 'مجموع 450+198,36 هو', '648,36', '648', '64,836', '64836', '648,36', ''),
(132, 3, 'مجموع 454 و 6545 هو', '6999', '9666', '9696', '6966', '6999', ''),
(133, 3, 'مجموع 105,01 و 61,34 هو ', '166,35', '166', '1663,5', '16,635', '166,35', ''),
(134, 4, 'حدد الإجابة الصحيحة: 10 في المائة من 76 هي', '7,6', '760', '0,76', '0.0076', '7,6', ''),
(135, 4, 'العدد الكسري 1/4 هو', '25%', '75%', '100%', '35%', '25%', ''),
(136, 4, 'حُدِد تخفيض 20 في المائة من ثمن حاسوب قدره 8500درهم , حدد الثمن بعد التخفيض', ' 6800 DH', '8000 DH', '8400 DH', '7600 DH', ' 6800 DH', ''),
(137, 5, 'مساحت المربع هي', 'الضلع * الضلع', '2 * الضلع * الضلع', 'الضلع + الضلع', '2*(الضلع +الضلع)', 'الضلع * الضلع', ''),
(138, 5, 'مساحة القرص ', 'π * الشعاع *الشعاع', 'π * الشعاع +الشعاع', 'π * الشعاع', 'الشعاع *الشعاع', 'π * الشعاع *الشعاع', ''),
(139, 5, 'مستطيل طوله 5 سنتمترات و عرضه 3 سنتمترات ,مساحته بالسنتمتر المربع هي ', '15', '8', '2', '16', '15', ''),
(140, 6, 'القياس 247 دسمتر يساوي', '2.47 dam', '2.47 hm', '2.47 m', '2.47 cm', '2.47 dam', ''),
(141, 6, 'المتر هو', '100 cm', '1000 cm', '10 cm', '100 dm', '100 cm', ''),
(142, 6, 'طول ملعب كرة القدم هو تقريبا', '90 m', '90 km', '90 dm', '900 cm', '90 m', ''),
(143, 7, 'Indique le type de la phrase suivante: les enfants grandissent vite ', 'Phrase déclarative', 'Phrase interrogative', 'Phrase impérative', 'Prase exclamative', 'Phrase déclarative', ''),
(144, 7, 'Quelle est la phrase interrogative parmi les phrases suivantes:', 'Tu vas à l''école ?', 'il fait chaud .', 'Que c''est mal écrit !', 'Ne faites pas de bruit .', 'Tu vas à l''école ?', ''),
(145, 7, 'Une phrase exclamative se termine toujours par un:', 'point d''exclamation', 'point', 'point d''interrogation', 'rien', 'point d''exclamation', ''),
(146, 8, 'Qu''il est le pronom convenable à cette phrase : ....marchez sur le trottoir.', 'Vous', 'Je', 'Nous', 'Elles', 'Vous', ''),
(147, 8, 'Mets le verbe entre parenthèses au présent: Nous (être) en retard.', 'Sommes', 'suis', 'es', 'sont', 'Sommes', ''),
(148, 8, 'Mets le verbe entre parenthèses au présent: je (regarder) un film.', 'Regarde', 'Regardes', 'Regardons', 'Regardent', 'Regarde', ''),
(149, 9, 'La forme correcte du "Passé récent" est:', 'Pronom + verbe "Venir" au présent + "de" + verbe à l''infinitif.', 'Pronom + verbe "Venir" au futur + "de" + verbe à l''infinitif.', 'Pronom + verbe "Venir" au présent  + verbe à l''infinitif.', 'Pronom + verbe "Venir" au présent + "de" + verbe conjugé', 'Pronom + verbe "Venir" au présent + "de" + verbe à l''infinitif.', ''),
(150, 9, 'Quelle la phrase où le verbe est conjugé au passé récent', 'tu viens de sortir de la salle.', 'tu sors de la salle.', 'tu es sorti de la salle.', 'tu sorais de la salle', 'tu viens de sortir de la salle.', ''),
(151, 9, 'Mets le verbe entre parenthèses au passé présent: je (regarder) ce film.', 'Je viens de regarder ce filme.', 'Je regarde ce filme.', 'J''ai regardé ce filme.', 'Aucune réponse n''est correcte!', 'Je viens de regarder ce filme.', ''),
(152, 10, 'El Guarrouj a gagné deux médailles.le GNS dans cette phrase est:', 'El Guarrouj', 'A gagné', 'Deux médailles', 'El Guarrouj a gagné', 'El Guarrouj', ''),
(153, 10, 'Le jeune Athlète a remporté le marathon. le GNS dans cette phrase est:', 'Le jeune Athlète', 'A remporté', 'Le jeune', 'Le marathon', 'Le jeune Athlète', ''),
(154, 10, 'Sous les applaudissements du public, arrive le champion Marocain. le GNS dans cett phrase est:', 'Le champion Marocain', 'Public', 'Les applaudissements', 'Arrive', 'Le champion Marocain', ''),
(155, 11, 'La forme correcte du futur proche est:', 'Pronom + verbe "Aller" au présent +  verbe à l''infinitif.', 'Pronom + verbe "Aller" au présent +  verbe conjugé', 'Pronom + verbe "Aller" au futur +  verbe à l''infinitif.', 'Pronom + verbe "Venir" au présent + de +  verbe à l''infinitif.', 'Pronom + verbe "Aller" au présent +  verbe à l''infinitif.', ''),
(156, 11, ' Mets le verbe entre parenthèses au futur proche: Bientôt, le match (commencer).', 'Va commencer', 'Vient de commencer ', 'Commence', 'Commencera', 'Va commencer', ''),
(157, 11, 'Au futur proche le verbe de la phrase suivante :Ils participer au tournoi de tennis.est:', 'Vont participer', 'Allons participer', 'Va participer', 'Allez participer', 'Vont participer', ''),
(158, 12, 'Le pluriel du mot entre parenthèse dans la phrase suivante:Les locomotives roulent sur (le rail).\r\nest:', 'Les rails', 'Les raus', 'Les raux', 'Les railaux', 'Les rails', ''),
(159, 12, 'L''intrus dans la serie de mots suivants:lejournal-le bal-le carnaval-le chacal.\r\nest:', 'Le journal', 'Le bal', 'Le carnaval', 'Le chacal', 'Le journal', ''),
(160, 12, '(Les coraux) brillent au fond de la mer.\r\nAu singulier le mot entre parenthèse devient:\r\n', 'Le corail', 'Le corau', 'Le coral', 'Le coraux', 'Le corail', ''),
(161, 13, 'لون سلك الطور هو', 'أحمر', 'ازرق', 'أخضر و أصفر', 'أسود', 'أحمر', ''),
(162, 13, 'تركب المصابيح في الدارة الكهربائية بالمنزل على', 'التوازي', 'التوالي ', 'بعضها على التوالي و بعضها على التوازي', 'كل الإجابات خاطئة', 'التوازي', ''),
(163, 13, 'يٌمكن العداد الكهربائي من ', 'قياس الطاقة الكهربائية المستهلكة', 'قطع التيار الكهربائي على المنزل', 'حماية الأشخاص من أخطار التيار الكهربائي', 'كل الإخابت صحيحة', 'قياس الطاقة الكهربائية المستهلكة', ''),
(164, 14, 'التربة خليط من مواد', 'عضوية و معدنية', 'عضوية', 'معدنية', 'غير معدنية و غير عضوية', 'عضوية و معدنية', ''),
(165, 14, 'للكائنات الحية الدقيقة التي تعيش في التربة دور هام في ', 'تخصيب التربة', 'تعرية التربة', 'تلويث التربة', 'تلوين التربة', 'تخصيب التربة', ''),
(166, 14, 'بعد بضعة سنوات ,تتحول أوراق النباتات المتساقطة على التربة وجثث الحيوانات إلى غبار أسود اللون يدعى', 'الدُبال', 'الرماد', 'الفرش الحرجي', 'النفايات', 'الدُبال', ''),
(167, 15, 'من بين مصادر الطاقة المتجددة', 'الشمس', 'الخشب', 'البترول', 'الغاز', 'الشمس', ''),
(168, 15, 'تنتج الطاقة الكهربائية عن  ', 'دوران مغناطيس قرب وشيعة', 'تدفق الماء', 'دوران عنفة مروحة', 'كل الإجابات صحيحة', 'دوران مغناطيس قرب وشيعة', ''),
(169, 15, 'للحفاض على الطاقة بالمنزل نقوم ب', 'إطفاء المصابح التي اسنا بحاجة إليها', 'الطهي بالكهرباء عوض الغاز', 'تخفيض صوت التلفاز', 'ترك المصابيح مضائة طول اليل و النهار', 'إطفاء المصابح التي اسنا بحاجة إليها', ''),
(170, 16, 'الغازات أجسام ', 'قابلة للإنضغاط و التمدد', 'قابلة للإنضغاط  فقط', 'قابلة  التمدد فقط', 'غير قابلة للإنضغاط و التمدد', 'قابلة للإنضغاط و التمدد', ''),
(171, 16, 'يرتفع ضغط الغاز عند', 'إنضغاطه', 'تمدده', 'إنضغاطه و تمدده', 'كل الإجابات خاطئة', 'إنضغاطه', ''),
(172, 16, 'يقاس الضغط بواسطة ', 'البارومتر', 'الترمومتر', 'الميزان', 'المتر', 'البارومتر', ''),
(173, 17, 'يتعاقب النهار و الليل لأن', 'الأرض تدور حول نفسها', 'الشمس تدور حول الأرض', 'الأرض لا تدور حول الشمس', 'الشمس تدور حول نفسها', 'الأرض تدور حول نفسها', ''),
(174, 17, 'يكون أطول نهار في السنة عند', 'الإنقلاب الصيفي', 'الإنقلاب الربيعي', 'الإنقلاب الشتوي', 'الإنقلاب الخريفي', 'الإنقلاب الصيفي', ''),
(175, 17, 'تتعاقب فصول السنة لأن', 'الأرض تدور حول الشمس', 'الشمس تدور حول الأرض', 'الأرض تدور حول نفسها', ' الشمس تدور حول نفسها', 'الأرض تدور حول الشمس', ''),
(176, 18, 'الفعل اللازم هو الذي', 'يكتفي بالفاعل فقط لتكوين جملة مفيدة', 'يحتاج للفاعل و المفعول به لتكوين جملة مفيدة', 'يكتفي بالمفعول به فقط لتكوين جملة مفيدة', 'كل الإجابات خاطئة', 'يكتفي بالفاعل فقط لتكوين جملة مفيدة', ''),
(177, 18, 'من بين الأفعال الثلاثة التالية ,ماهو الفعل المتعدي: فرح, إطمأن ,عرف', 'عرف', 'فرح', 'إطمأن', 'كل هته الأفعال متعدية', 'عرف', ''),
(178, 18, 'عرف الإنسان الرحمة, "عرف" فعلٌ', 'متعدي الى واحد', 'نتعدي الى اثنان', 'لازم', 'كل الإجابات خاطئة', 'متعدي الى واحد', ''),
(179, 19, 'حروف العلة هي', 'الواو , الألف ,الياء', 'الواو , الألف ', 'الواو , الألف', 'الواو , الألف ,الهمزة', 'الواو , الألف ,الياء', ''),
(180, 19, 'وعد ,قال ,رمى ,فتح . حدد الأفعال المعتلة', 'وعد ,قال ,رمى ', 'قال ,رمى ,فتح', 'وعد  ,فتح', 'وعد ,قال ,رمى ,فتح', 'وعد ,قال ,رمى ', ''),
(181, 19, 'الفعل المثال هو الفعل الذي', 'فاؤه حرف علة', 'عينه حرف علة', 'لامه حرف علة', 'ليس فيه حرف علة', 'فاؤه حرف علة', ''),
(182, 20, 'النواسخ الفعلية', 'ترفع المبتدأ و تنصب الخبر', 'تنصب المبتدأ و تنصب الخبر', 'ترفع المبتدأ و  ترفع الخبر', 'تنصب المبتدأ وترفع الخبر', 'ترفع المبتدأ و تنصب الخبر', ''),
(183, 20, 'النواسخ الحرفية', ' تنصب المبتدأ و ترفع الخبر', 'ترفع المبتدأ و تنصب الخبر', 'ترفع المبتدأ و ترفع الخبر', 'تنصب المبتدأ و تنصب الخبر', ' تنصب المبتدأ و ترفع الخبر', ''),
(184, 20, 'حدد النواسخ الحرفية من بين النواسخ التالية . إن , أن ,صار , كأن , كان', 'إن , أن , كأن', 'كان , صار ', 'أن ,صار , كأن', 'إن , أن ,صار , كأن , كان', 'إن , أن , كأن', ''),
(185, 21, 'المفعول المطلق مصدر', 'منصوب', 'مجرور', 'مرفوع', 'ساكن', 'منصوب', ''),
(186, 21, 'أتقن عملك إتقانا, إتقانا في هذه الجملة هو', 'مفعول مطلق', 'مفعول لأجله', 'مفعول به', 'مفعول فيه', 'مفعول مطلق', ''),
(187, 21, 'المفعول لأجله مصدر منصوب يذكر ل', 'بيان سبب الفعل', 'تأكيد معنى الفعل', 'بيان نوع الفعل', 'بيان عدد الفعل', 'بيان سبب الفعل', ''),
(188, 22, 'تكتب الهمزة على الألف إذا كانت', 'ساكنة بعد فتح', 'ساكنة بعد ضم', 'مضمومة بعد فتح', 'مفتوحة بعد كسر', 'ساكنة بعد فتح', ''),
(189, 22, 'تكتب الهمزة على الواو إذى كانت ', 'ساكنة بعد ضم', 'ساكنة بعد فتح', 'مكسورة بعد ضم', 'كل الإجابات صحيحة', 'ساكنة بعد ضم', ''),
(190, 22, 'حدد الكتابة الصحيحة من بين الكابات التالية: مَلِيئَةٌ , مَلِيأَةٌ, مَلِيؤَةٌ', 'مليئة', 'مليأة', 'مليؤة', 'كل الإجابات خاطئة', 'مليئة', '');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `locked` tinyint(1) NOT NULL,
  `expired` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `confirmation_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `credentials_expired` tinyint(1) NOT NULL,
  `credentials_expire_at` datetime DEFAULT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_insc` date NOT NULL,
  `typ` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `niveau` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `numNat` int(11) NOT NULL,
  `ecole` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ville` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_2DA1797792FC23A8` (`username_canonical`),
  UNIQUE KEY `UNIQ_2DA17977A0D96FBF` (`email_canonical`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `username`, `username_canonical`, `email`, `email_canonical`, `enabled`, `salt`, `password`, `last_login`, `locked`, `expired`, `expires_at`, `confirmation_token`, `password_requested_at`, `roles`, `credentials_expired`, `credentials_expire_at`, `nom`, `prenom`, `date_insc`, `typ`, `niveau`, `numNat`, `ecole`, `ville`) VALUES
(1, 'kha', 'kha', 'kha@kha.kha', 'kha@kha.kha', 1, 'fmy0cedyajw48okowcccokw48ksc8', 'm/zrAflWIocgqOJhuhNh2QcgFjkcTrryzASbI2aBNexA5KRmpNoOTH2hQkQaDawrzeK6r3cQFmzLb8P9eCJSIw==', '2014-04-17 19:38:50', 0, 0, NULL, NULL, NULL, 'a:0:{}', 0, NULL, '', '', '0000-00-00', 'etudiant', '', 0, '', ''),
(2, 'aaaa', 'aaaa', 'a@aaa.aaa', 'a@aaa.aaa', 1, '9e5jeavjspc8wk4cgo8www08gowg8ws', 'DO4exj9e4Q03GCEWsL7zu3CPK9XCkH5h2+hl52bmkOMi6CzKV6x6LIXs1T3xZQEFpvCTc1ENbbMz9N7TmQXz1g==', '2014-04-14 21:53:17', 0, 0, NULL, NULL, NULL, 'a:0:{}', 0, NULL, '', '', '2014-04-14', 'prof', '', 0, '', '');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_insc` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `login`, `password`, `nom`, `prenom`, `date_insc`) VALUES
(1, 'inpt', 'inpt', 'inpt', 'inpt', '2014-03-02'),
(2, 'tpni', 'tpni', 'tpni', 'tpni', '2014-03-05');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
