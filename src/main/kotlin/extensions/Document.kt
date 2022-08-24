package extensions

import kotlinx.browser.document

fun <T> elementFromId(id: String) =  document.getElementById(id) as T?
