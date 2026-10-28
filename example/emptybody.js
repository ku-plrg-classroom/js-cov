function emptybody(n) {
  let i = n;
  while (i-- > 0) ;
  for (;;) { break; }
  for (const x of []) ;
  if (n > 0) ; else ;
  do ; while (false);
  label: ;
  switch (n) { case 0: ; default: }
  return i;
}
