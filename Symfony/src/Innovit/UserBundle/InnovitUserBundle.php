<?php

namespace Innovit\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class InnovitUserBundle extends Bundle
{
public function getParent()
	{
	    return 'FOSUserBundle';
	}
}
